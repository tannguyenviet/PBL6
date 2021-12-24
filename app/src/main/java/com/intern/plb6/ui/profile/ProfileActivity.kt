package com.intern.plb6.ui.profile

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.intern.plb6.R
import com.intern.plb6.data.AppDataManager
import com.intern.plb6.data.local.frefs.AppPreferencesHelper
import kotlinx.android.synthetic.main.activity_profile.*
import kotlinx.android.synthetic.main.activity_register.*

class ProfileActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_profile)

        val user = AppDataManager.getInstance()?.getUserInfo()
        user?.name.let {
            nameEditText.setText(it)
        }

        user?.email.let {
            emailEditText.setText(it)
        }

        user?.phone.let {
            phoneEditText.setText(it)
        }

        user?.birthday.let {
            dateEditText.setText(it)
        }
    }
}