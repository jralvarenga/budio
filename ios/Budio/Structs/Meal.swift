//
//  Meal.swift
//  Budio
//
//  Created by Rigo Alvarenga on 4/6/24.
//

import Foundation

struct Meal: Hashable {
    let id: String
    let name: String
    let startTime: Int?
    let endTime: Int?
}

struct MealsExample {
    let meals = [
        Meal(id: "123", name: "Breakfast", startTime: 600, endTime: 1200),
        Meal(id: "321", name: "Lunch", startTime: 1201, endTime: 1800),
        Meal(id: "456", name: "Dinner", startTime: 1801, endTime: 2400),
        Meal(id: "654", name: "Snacks", startTime: nil, endTime: nil),
    ]
}
