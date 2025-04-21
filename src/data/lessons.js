const lessons = [
    {
      id: "js-intro",
      title: "JavaScriptga Kirish",
      category: "JavaScript",
      description: "JavaScript dasturlash tilining qanday ishlashini tushunib oling.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
      explanation: `
        JavaScript — bu brauzerda ishlaydigan, veb-sahifalarni interaktiv qiladigan til.
        U HTML va CSS bilan birga ishlaydi va foydalanuvchining harakatlariga javob beradi.
        
        JavaScript kodlari <script> tegi ichida yoziladi. 
        Masalan:
        <script>
          console.log("Hello, JavaScript!");
        </script>
      `,
      codeExamples: [
        `// Konsolga matn chiqarish
        console.log("Hello, JavaScript!");`
      ]
    },
    {
      id: "js-variables",
      title: "O'zgaruvchilar va Ma'lumot Turlari",
      category: "JavaScript",
      description: "JavaScriptda o'zgaruvchilar bilan ishlashni o'rganing.",
      image: "https://example.com/js-variables.jpg",
      explanation: `
        JavaScriptda o'zgaruvchi bu — ma'lumot saqlovchi konteyner.
        O'zgaruvchi e'lon qilish uchun 'let', 'const' yoki 'var' kalit so'zlaridan foydalaniladi.
  
        Ma'lumot turlari quyidagilar:
        - Number (raqamlar)
        - String (matn)
        - Boolean (true/false)
        - null
        - undefined
        - Object, Array
        
        Misol:
        let yosh = 25;
        const ism = "Ali";
      `,
      codeExamples: [
        `let yosh = 25;
        const ism = "Ali";
        console.log("Ism:", ism);
        console.log("Yosh:", yosh);`
      ]
    },
    {
      id: "js-operators",
      title: "Operatorlar va Kiritish/Chiqarish",
      category: "JavaScript",
      description: "JavaScriptda hisoblash va ma'lumotlar bilan ishlashni o'rganing.",
      image: "https://example.com/js-operators.jpg",
      explanation: `
        JavaScriptda operatorlar yordamida hisob-kitob qilinadi yoki qiymatlar solishtiriladi.
        
        Asosiy operatorlar:
        - Arifmetik: +, -, *, /, %
        - Solishtirish: ==, ===, !=, >, <, >=, <=
        - Mantiqiy: &&, ||, !
  
        Brauzer foydalanuvchisidan ma'lumot olish uchun 'prompt', 
        ma'lumot chiqarish uchun esa 'alert' yoki 'console.log' ishlatiladi.
      `,
      codeExamples: [
        `let a = prompt("Birinchi sonni kiriting:");
        let b = prompt("Ikkinchi sonni kiriting:");
        let natija = Number(a) + Number(b);
        alert("Yig'indi: " + natija);`
      ]
    }
  ];
  
  export default lessons;
  