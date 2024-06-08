//
//  AddFood.swift
//  Budio
//
//  Created by Rigo Alvarenga on 8/6/24.
//

import SwiftUI

struct AddFood: View {
    @Binding var currentMealId: String

    var body: some View {
        Text("Add food page \(self.currentMealId)")
    }
}

struct AddFoodPreview: View {
    @State private var currentMealId: String = MealsExample().meals[0].id
    
    var body: some View {
        AddFood(currentMealId: $currentMealId)
    }
}

#Preview {
    AddFoodPreview()
}
