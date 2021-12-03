package com.intern.plb6.ui.register

import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.ViewModelProvider
import com.intern.plb6.R
import com.intern.plb6.data.model.api.LoginRequest
import com.intern.plb6.data.model.api.RegisterRequest
import com.intern.plb6.databinding.ActivityRegisterBinding
import com.intern.plb6.ui.base.BaseActivity
import com.intern.plb6.ui.login.view.LoginActivity
import kotlinx.android.synthetic.main.activity_login.*
import kotlinx.android.synthetic.main.activity_register.*

class RegisterActivity : BaseActivity(), RegisterNavigator {

    private lateinit var mViewModel: RegisterViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val binding: ActivityRegisterBinding =
            DataBindingUtil.setContentView(this, R.layout.activity_register)
        val factory = RegisterFactory(this)
        mViewModel = ViewModelProvider(this, factory).get(RegisterViewModel::class.java)
        binding.viewModel = mViewModel
        binding.navigator = this

        txtRegister.setOnClickListener {
            finish()
        }
    }

    override fun openLoginActivity() {
        finish()
        startActivity(Intent(this, LoginActivity::class.java))
    }

    override fun register() {
//        val email = edtEmail.text
//        val pass = edtPass.text
//        val confirmPass = edtConfirmPass.text
//        val name = edtName.text
//        val phone = edtPhone.text
//
//        if (email.isNullOrEmpty() || pass.isNullOrEmpty() || confirmPass.isNullOrEmpty() || name.isNullOrEmpty() || phone.isNullOrEmpty()) {
//            Toast.makeText(this, "Please enter enough information !!!", Toast.LENGTH_LONG)
//                .show()
//        } else {
//            if (pass.toString() != confirmPass.toString()) {
//                Toast.makeText(this, "Password is not mapping !!!" + pass + " " + confirmPass, Toast.LENGTH_LONG)
//                    .show()
//            } else {
//                mViewModel.register(RegisterRequest("sanh","111", "sanh","091","sanhltt1999@gmail.com", 3))
//            }
//        }

        mViewModel.register(RegisterRequest("sanh","111", "sanh","091","sanhltt1999@gmail.com", 3))

    }

    override fun showMess(mess: String) {
        Toast.makeText(this, mess, Toast.LENGTH_LONG).show()
    }
}