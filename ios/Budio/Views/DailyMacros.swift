//
//  DailyMacros.swift
//  Budio
//
//  Created by Rigo Alvarenga on 5/6/24.
//

import SwiftUI

struct DailyMacros: View {
    @Binding var carbs: Int
    @Binding var protein: Int
    @Binding var fat: Int
    
    var body: some View {
        HStack(alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/) {
            VStack {
                Text(String(self.carbs))
                    .fontWeight(.bold)
                Text("Carbs")
                    .font(.system(size: 14))
            }
            VStack {
                Text(String(self.protein))
                    .fontWeight(.bold)
                Text("Protein")
                    .font(.system(size: 14))
            }
            VStack {
                Text(String(self.fat))
                    .fontWeight(.bold)
                Text("Fat")
                    .font(.system(size: 14))
            }
        }
    }
}

struct DailyMacrosPreview: View {
    @State private var carbs: Int = 235
    @State private var protein: Int = 100
    @State private var fat: Int = 50
    
    var body: some View {
        DailyMacros(carbs: $carbs, protein: $protein, fat: $fat)
    }
}

#Preview {
    DailyMacrosPreview()
}
