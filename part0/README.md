Task's 0.01 & 0.02 have been read.

Task 03 is a simple html form.
```
<!DOCTYPE html>
<html>

<head>
    <style>
        .container {
            margin: 0 auto;
            width: 400px;
            /* Form outline */
            padding: 1em;
            border: 1px solid #CCC;
            border-radius: 1em;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        form li+li {
            margin-top: 1em;
        }

        label {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            display: inline-block;
            width: 90px;
            text-align: right;
        }

        input,
        textarea {
            font: 1em sans-serif;

            /* Uniform text field size */
            width: 300px;
            box-sizing: border-box;

            /* Match form field borders */
            border: 1px solid #999;
        }

        button {
            font-family: Arial, Helvetica, sans-serif;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 20px;
            margin-left: 40%;
            cursor: pointer;
            background-color: #326d34;
        }

        button:hover {
            background-color: #4CAF50;
        }

        input:focus,
        textarea:focus {
            border-color: #000;
        }
    </style>
    <meta charset="utf-8">
    <title>My test page</title>
</head>

<body>
    <div class='container' style="width: 400px;">
        <form action="/my-handling-form-page" method="post">
            <ul>
                <li>
                    <label class="label name">Name:</label>
                    <input type="text" id="name" name="user_name">
                </li>
                <li>
                    <label class="label mail">E-mail:</label>
                    <input type="email" id="mail" name="user_email">
                </li>
                <li>
                    <label class="label msg">Message:</label>
                    <textarea id="msg" name="user_message"></textarea>
                </li>
                <li>
                    <button class="button button1">Send.</button>
                </li>
            </ul>
        </form>
    </div>
</body>

</html>
```
Task 04:
![Screenshot: ](https://github.com/Alkane22/repo/blob/master/part0/04.png?raw=true)

Task 05:
![Screenshot: ](https://github.com/Alkane22/repo/blob/master/part0/05.png?raw=true)

Task 06:
![Screenshot: ](https://github.com/Alkane22/repo/blob/master/part0/06.png?raw=true)