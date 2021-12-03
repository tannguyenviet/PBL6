package com.intern.plb6.ui.register

import com.intern.plb6.ui.base.BaseNavigator

interface RegisterNavigator: BaseNavigator {

    fun openLoginActivity()

    fun register()

    fun showMess(mess: String)

}