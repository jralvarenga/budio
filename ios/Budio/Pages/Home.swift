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
    
    private let meals: [Meal] = MealsExample().meals
    
    @State private var currentMeal: String = CurrentMealByTime(meals: MealsExample().meals).getByTime()
    @State private var carbs: Int = 235
    @State private var protein: Int = 100
    @State private var fat: Int = 50
    @State var showAddFood: Bool = false
    
    var body: some View {
        NavigationStack {
            VStack(spacing: 15) {
                DatesNavigation()
                DailyMacros(carbs: $carbs, protein: $protein, fat: $fat)
                MealsNavigation(currentMeal: $currentMeal, meals: meals)
                FoodsInMeal()
            }
            .navigationTitle("Nutrition")
            .toolbar {
                ToolbarItem {
                    Button(action: {self.showAddFood = true}) {
                        Label("Add food", systemImage: "plus")
                    }.sheet(isPresented: $showAddFood, content: {
                        AddFood(currentMealId: $currentMeal)
                    })
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
}

#Preview {
    Home()
        .modelContainer(for: Item.self, inMemory: true)
}
