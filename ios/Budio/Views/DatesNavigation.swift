//
//  DatesNavigation.swift
//  Budio
//
//  Created by Rigo Alvarenga on 4/6/24.
//

import SwiftUI

struct DatesNavigation: View {
    let currentDate = Date.now

    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack {
                Text(Date.now, format: .dateTime.day().month().year())
            }
            .padding(.horizontal)
        }
        
    }
}

#Preview {
    DatesNavigation()
}
