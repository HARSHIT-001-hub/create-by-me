        function add() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            document.getElementById('result').innerText = num1 + num2;
        }

        function subtract() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            document.getElementById('result').innerText = num1 - num2;
        }

        function multiply() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            document.getElementById('result').innerText = num1 * num2;
        }

        function divide() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            if (num2 !== 0) {
                document.getElementById('result').innerText = num1 / num2;
            } else {
                document.getElementById('result').innerText = 'Cannot divide by zero';
            }
        }