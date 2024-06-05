//
//  HomePage.swift
//  Budio
//
//  Created by Rigo Alvarenga on 4/6/24.
//

import SwiftUI
import SwiftData

struct Home: View {
    @Environment(\.modelContext) private var modelContext
    @Query private var items: [Item]
    
    private let meals: [Meal] = MealsExample().meals
    
    @State private var currentMeal: String = CurrentMealByTime(meals: MealsExample().meals).getByTime()
    
    var body: some View {
        NavigationStack {
            VStack(spacing: 15) {
                DatesNavigation()
                MealsNavigation(currentMeal: $currentMeal, meals: meals)
                Text("Carbs, protein, fat here")
                ScrollView {
                    ForEach(items) { item in
                        NavigationLink {
                            Text("Item at \(item.timestamp, format: Date.FormatStyle(date: .numeric, time: .standard))")
                        } label: {
                            Text(item.timestamp, format: Date.FormatStyle(date: .numeric, time: .standard))
                        }
                    }
                    .onDelete(perform: deleteItems)
                }
            }
            .navigationTitle("Nutrition")
            .toolbar {
                ToolbarItem {
                    Button(action: addItem) {
                        Label("Add Item", systemImage: "plus")
                    }
                }
            }
        }
    }
    
    private func addItem() {
        withAnimation {
            let newItem = Item(timestamp: Date())
            modelContext.insert(newItem)
        }
    }
    
    private func deleteItems(offsets: IndexSet) {
        withAnimation {
            for index in offsets {
                modelContext.delete(items[index])
            }
        }
    }
}

#Preview {
    Home()
        .modelContainer(for: Item.self, inMemory: true)
}
