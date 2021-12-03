package com.intern.plb6

import android.app.Application
import com.intern.plb6.data.local.frefs.AppPreferencesHelper

class PLB6App: Application() {

    override fun onCreate() {
        super.onCreate()

        AppPreferencesHelper.getInstance()?.initConfig(this)

    }

}