//
//  MealsNavigation.swift
//  Budio
//
//  Created by Rigo Alvarenga on 4/6/24.
//

import SwiftUI

struct MealsNavigation: View {
    @Binding var currentMeal: String
    var meals: [Meal]
    
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack {
                ForEach(self.meals.map({$0.name}), id: \.self) { name in
                    Button(action: {
                        withAnimation {
                            currentMeal = name
                        }
                    }) {
                        Text(name)
                            .padding(7)
                            .padding(.horizontal)
                            .background(
                                Rectangle()
                                    .cornerRadius(100)
                                    .foregroundColor(currentMeal == name ? nil : Color(uiColor: .placeholderText))
                                    .opacity(1/4)
                            )
                    }
                }
            }.padding(.horizontal)
        }
    }
}

struct MealsNavigationPreview: View {
    @State private var filter: String = "Breakfast"
    private let meals: [Meal] = MealsExample().meals
    
    var body: some View {
        
        MealsNavigation(currentMeal: $filter, meals: meals)
    }
}



#Preview {
    MealsNavigationPreview()
}
