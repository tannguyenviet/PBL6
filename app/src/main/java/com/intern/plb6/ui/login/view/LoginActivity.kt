package com.intern.plb6.ui.login.view

import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.ViewModelProvider
import com.intern.plb6.R
import com.intern.plb6.data.model.api.LoginRequest
import com.intern.plb6.databinding.ActivityLoginBinding
import com.intern.plb6.ui.base.BaseActivity
import com.intern.plb6.ui.home.view.HomeActivity
import com.intern.plb6.ui.login.viewmodel.LoginFactory
import com.intern.plb6.ui.login.viewmodel.LoginViewModel
import com.intern.plb6.ui.register.RegisterActivity
import kotlinx.android.synthetic.main.activity_login.*

class LoginActivity : BaseActivity(), LoginNavigator {

    private lateinit var mViewModel: LoginViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val binding: ActivityLoginBinding =
            DataBindingUtil.setContentView(this, R.layout.activity_login)
        val factory = LoginFactory(this)
        mViewModel = ViewModelProvider(this, factory).get(LoginViewModel::class.java)
        binding.viewModel = mViewModel
        binding.navigator = this
    }

    override fun openRegisterActivity() {
        startActivity(Intent(this, RegisterActivity::class.java))
    }

    override fun openHomeActivity() {
        startActivity(Intent(this, HomeActivity::class.java))
    }

    override fun login() {
        val userName = txtUserName.text
        val pass = txtPass.text

        if (userName.isNullOrEmpty() || pass.isNullOrEmpty()) {
            Toast.makeText(this, "Please Enter your username and pass !!!", Toast.LENGTH_LONG).show()
        } else {
            mViewModel.login(LoginRequest(userName.toString(), pass.toString()))
        }
    }
}