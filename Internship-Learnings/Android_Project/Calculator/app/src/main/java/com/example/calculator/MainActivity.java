package com.example.calculator;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    EditText num1, num2;
    TextView result;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Initialize Views
        num1 = findViewById(R.id.NUM1);
        num2 = findViewById(R.id.NUM2);
        result = findViewById(R.id.Ans);
    }

    public void onClickExampleMethod(View view) {
        String input1 = num1.getText().toString();
        String input2 = num2.getText().toString();

        // If input is empty, show error
        if (input1.isEmpty() || input2.isEmpty()) {
            result.setText("Please enter both numbers!");
            return;
        }

        int number1 = Integer.parseInt(input1);
        int number2 = Integer.parseInt(input2);
        int res = 0;

        // Perform operation based on clicked button
        if (view.getId() == R.id.Add) {
            res = number1 + number2;
        } else if (view.getId() == R.id.Sub) {
            res = number1 - number2;
        } else if (view.getId() == R.id.Mul) {
            res = number1 * number2;
        } else if (view.getId() == R.id.Div) {
            if (number2 == 0) {
                result.setText("Cannot divide by zero!");
                return;
            }
            res = number1 / number2;
        }

        result.setText("Result: " + res);
    }
}