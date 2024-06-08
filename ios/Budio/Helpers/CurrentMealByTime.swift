//
//  CurrentMealByTime.swift
//  Budio
//
//  Created by Rigo Alvarenga on 4/6/24.
//

import Foundation

struct CurrentMealByTime {
    var meals: [Meal]
    let currentDate = Date.now
    
    func getByTime() -> String {
        let currentTime = String(currentDate.formatted(.dateTime.hour().minute()))
        let timeArr = currentTime.components(separatedBy: " ")
        var hour = Int(timeArr[0].components(separatedBy: ":").joined(separator: "")) ?? 0
        if hour >= 12 {
            hour = hour - 12
        }
        if timeArr[1] == "PM" {
            hour = (hour) + 1200
        }
        
        var currentMeal = "Breakfast"
        meals.forEach { meal in
            let startTime = meal.startTime ?? -1
            let endTime = meal.endTime ?? -1
            if hour >= startTime && hour <= endTime {
                currentMeal = meal.name
            }
        }
        return currentMeal
    }
}
