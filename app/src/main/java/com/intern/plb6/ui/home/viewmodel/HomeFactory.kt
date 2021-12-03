package com.intern.plb6.ui.home.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.intern.plb6.ui.home.view.HomeNavigator

class HomeFactory(private val navigator : HomeNavigator) : ViewModelProvider.Factory {

    override fun <T : ViewModel?> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(HomeViewModel::class.java)) {
            return HomeViewModel(navigator) as T
        }
        throw IllegalArgumentException("Unknown class name")
    }
}