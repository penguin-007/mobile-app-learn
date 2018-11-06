package com.example.user.firstappkotlin

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText

class SecondActivity:Activity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.second_activity)

        // elements
        val inputText = findViewById<EditText>(R.id.text_edit)

        findViewById<Button>(R.id.text_btn).setOnClickListener {
            val newStr = inputText.text.toString()
            val i = Intent()

            // экстра данные отправляем другому активити
            i.putExtra("text2", newStr)

            // ???
            setResult(0, i)
            finish()
        }

        // получение экстра данных из активити
        val str = intent.getStringExtra("text")

        inputText.setText(str)
    }
}