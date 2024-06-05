//
//  Meal.swift
//  Budio
//
//  Created by Rigo Alvarenga on 4/6/24.
//

import Foundation

struct Meal: Hashable {
    let name: String
    let startTime: Int?
    let endTime: Int?
}

struct MealsExample {
    let meals = [
        Meal(name: "Breakfast", startTime: 600, endTime: 1200),
        Meal(name: "Lunch", startTime: 1201, endTime: 1800),
        Meal(name: "Dinner", startTime: 1801, endTime: 2400),
        Meal(name: "Snacks", startTime: nil, endTime: nil),
    ]
}
