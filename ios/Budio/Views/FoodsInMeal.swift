//
//  FoodsInMeal.swift
//  Budio
//
//  Created by Rigo Alvarenga on 5/6/24.
//

import SwiftUI
import SwiftData

struct FoodsInMeal: View {
    @Environment(\.modelContext) private var modelContext
    @Query private var items: [Item]

    var body: some View {
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
    
    private func deleteItems(offsets: IndexSet) {
        withAnimation {
            for index in offsets {
                modelContext.delete(items[index])
            }
        }
    }
}

#Preview {
    FoodsInMeal()
        .modelContainer(for: Item.self, inMemory: true)
}
