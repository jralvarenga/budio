//
//  BottomTab.swift
//  Budio
//
//  Created by Rigo Alvarenga on 4/6/24.
//

import SwiftUI

struct BottomTab: View {
    var body: some View {
        TabView {
            Home()
                .tabItem() {
                    Label("Home", systemImage: "house")
                }
            Home()
                .tabItem() {
                    Label("Explore", systemImage: "safari")
                }
        }
    }
}

#Preview {
    BottomTab()
}
