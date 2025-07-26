// Language Translations
const translations = {
    'ar': {
        gameTitle: "رحلة المبرمج",
        slogan: "انطلق في مغامرة تعلم C++، من الأساسيات حتى الاحتراف!",
        startButton: "ابدأ اللعبة",
        settingsButton: "الإعدادات",
        learnWithUsButton: "تعلم معنا",
        developerInfoButton: "المطور",
        settingsTitle: "الإعدادات",
        toggleSound: "تشغيل/إيقاف الصوت:",
        musicVolume: "مستوى صوت الموسيقى:",
        sfxVolume: "مستوى صوت المؤثرات:",
        language: "اللغة:",
        toggleTimer: "تشغيل/إيقاف المؤقت:", // New
        timerDuration: "مدة المؤقت (ثانية):", // New
        seconds: "ثانية", // New
        moreSettingsSoon: "المزيد من الإعدادات قريباً...",
        backToMainMenu: "العودة للقائمة الرئيسية",
        developerInfoTitle: "معلومات المطور",
        devInfoText1: "تم تطوير هذه اللعبة بواسطة ZentOfficial.",
        devInfoText2: "تم تطوير اللعبة لهدف التعلم والتدريب والاتقان للغة سي بلس بلس.",
        devInfoText3: "للاستفسار بأي شيء تواصل مع الحساب التالي:",
        instagramLinkText: "ZentOfficial", // Text for Instagram link
        contactUsLabel: "للاستفسار التواصل على:", // New label for contact info
        runExampleText: "تشغيل المثال", // Text for run example button
        learnWithUsTitle: "تعلم معنا",
        cppBasicsTitle: "أساسيات لغة C++",
        cppBasicsText: "C++ هي لغة برمجة قوية ومتعددة الاستخدامات، تستخدم في تطوير أنظمة التشغيل، الألعاب، التطبيقات عالية الأداء، وغيرها. لتعلمها بشكل صحيح، ابدأ بالأساسيات:",
        variablesDataTypes: "المتغيرات وأنواع البيانات: فهم كيفية تخزين البيانات (أرقام، نصوص، قيم منطقية).",
        operators: "العمليات (Operators): كيفية إجراء العمليات الحسابية والمنطقية.",
        controlStructures: "هياكل التحكم (Control Structures): مثل جمل `if/else` لاتخاذ القرارات، وحلقات `for/while` للتكرار.",
        functions: "الدوال (Functions): تنظيم الكود في وحدات قابلة لإعادة الاستخدام.",
        arrays: "المصفوفات (Arrays): تخزين مجموعات من البيانات.",
        pointers: "المؤشرات (Pointers): التعامل المباشر مع الذاكرة (مفهوم متقدم قليلاً).",
        oop: "البرمجة كائنية التوجه (OOP): فهم الفئات (Classes) والكائنات (Objects) والمفاهيم المرتبطة بها.",
        idesTitle: "البرامج وأدوات التطوير (IDEs)",
        idesText: "لكتابة وتشغيل أكواد C++، ستحتاج إلى بيئة تطوير متكاملة (IDE) ومترجم (Compiler). إليك بعض الخيارات الشائعة وكيفية البدء:",
        vsCodeTitle: "Visual Studio Code (VS Code):",
        vsCodeDesc: "محرر أكواد خفيف وقوي مع دعم ممتاز لـ C++ عبر الإضافات (مثل C/C++ Extension Pack).",
        vsCodeHowTo: "كيفية البدء:",
        vsCodeStep1: "قم بتحميل VS Code من الموقع الرسمي.",
        vsCodeStep2: "ثبت إضافة C/C++ من سوق الإضافات.",
        vsCodeStep3: "ثبت مترجم GCC/MinGW (لنظام Windows) أو استخدم المترجم المدمج (لنظام Linux/macOS).",
        vsCodeStep4: "إنشاء مشروع:",
        vsCodeStep4Desc: "افتح مجلد المشروع، أنشئ ملف `.cpp`، ثم استخدم خيارات `Run and Debug` لتشغيل الكود.",
        vsCodeFirstCode: "أول كود:",
        visualStudioTitle: "Microsoft Visual Studio:",
        visualStudioDesc: "بيئة تطوير متكاملة وقوية جداً لنظام Windows، مناسبة للمشاريع الكبيرة.",
        visualStudioHowTo: "كيفية البدء:",
        visualStudioStep1: "قم بتحميل Visual Studio Community Edition (مجاني) من موقع مايكروسوفت.",
        visualStudioStep2: "اختر \"Desktop development with C++\" أثناء التثبيت.",
        visualStudioStep3: "إنشاء مشروع:",
        visualStudioStep3Desc: "File > New > Project > Console App.",
        visualStudioFirstCode: "أول كود:",
        codeBlocksTitle: "Code::Blocks:",
        codeBlocksDesc: "بيئة تطوير مفتوحة المصدر ومجانية، خفيفة وسهلة الاستخدام للمبتدئين.",
        codeBlocksHowTo: "كيفية البدء:",
        codeBlocksStep1: "قم بتحميل Code::Blocks مع حزمة MinGW (لتضمين المترجم).",
        codeBlocksStep2: "إنشاء مشروع:",
        codeBlocksStep2Desc: "File > New > Project > Console application.",
        codeBlocksFirstCode: "أول كود:",
        librariesTitle: "المكتبات الأساسية في C++",
        librariesText: "المكتبات هي مجموعات من الدوال والتعريفات الجاهزة التي تساعدك على إنجاز مهام معينة بسهولة. إليك بعض المكتبات الأساسية:",
        iostreamLib: "`<iostream>` (Input/Output Stream):",
        iostreamLibDesc: "تستخدم للتعامل مع الإدخال والإخراج القياسي (مثل الشاشة ولوحة المفاتيح).",
        stringLib: "`<string>` (String Manipulation):",
        stringLibDesc: "لإنشاء ومعالجة السلاسل النصية (النصوص).",
        vectorLib: "`<vector>` (Dynamic Array):",
        vectorLibDesc: "لإنشاء مصفوفات ديناميكية يمكن تغيير حجمها.",
        cmathLib: "`<cmath>` (Mathematical Functions):",
        cmathLibDesc: "تحتوي على دوال رياضية مثل الجذر التربيعي، القوة، الجيب، إلخ.",
        fstreamLib: "`<fstream>` (File Stream):",
        fstreamLibDesc: "للقراءة والكتابة إلى الملفات.",
        howToLinkLib: "كيفية ربط المكتبة:",
        howToLinkLibDesc: "ببساطة استخدم `#include <اسم_المكتبة>` في بداية ملف الكود الخاص بك. على سبيل المثال: `#include <iostream>`.",
        additionalResources: "موارد تعليمية إضافية",
        additionalResourcesText: "لتعميق فهمك، ننصح بالاستفادة من مصادر متنوعة:",
        videoTutorials: "مقاطع الفيديو التعليمية:",
        articlesBlogs: "المقالات والمدونات:",
        books: "الكتب:",
        smallProjects: "المشاريع الصغيرة:",
        noteSimulation: "ملاحظة: هذه اللعبة توفر محاكاة لبيئة البرمجة. في الواقع، ستحتاج إلى تثبيت مترجم C++ (مثل GCC) وبيئة تطوير متكاملة (IDE) لتشغيل أكوادك.",
        selectStageTitle: "اختر المرحلة",
        returnToMainMenu: "العودة للقائمة الرئيسية",
        runCodeButton: "تشغيل الكود",
        hintButton: "تلميح",
        returnToStages: "العودة للمراحل",
        nextStage: "المرحلة التالية",
        congratulationsTitle: "تهانينا!",
        endMessage: "لقد أكملت جميع المراحل وأصبحت محترفاً في C++!",
        restartButton: "ابدأ من جديد",
        locked: "(مقفلة)",
        completed: "(مكتمل)",
        loading: "جاري التحميل...",
        codeBuildError: "خطأ في بناء الكود:",
        outputError: "خطأ في المخرجات أو الكود غير مكتمل. حاول مرة أخرى. \nالمخرجات المتوقعة:",
        timerExpired: "انتهى الوقت! لم تكمل المرحلة في الوقت المحدد.", // New
        example: "مثال:",
        imageOfConsoleOutput: "مخرج الكونسول",
        imageOfTextString: "سلسلة نصية",
        imageOfDynamicArray: "مصفوفة ديناميكية",
        imageOfMathSymbols: "رموز رياضية",
        imageOfFileIcon: "أيقونة ملف",
        goText: "انطلق!", // New translation for countdown
        settingsInGame: "الإعدادات" // New translation for settings button in game
    },
    'en': {
        gameTitle: "The Programmer's Journey",
        slogan: "Embark on a C++ learning adventure, from basics to mastery!",
        startButton: "Start Game",
        settingsButton: "Settings",
        learnWithUsButton: "Learn With Us",
        developerInfoButton: "Developer",
        settingsTitle: "Settings",
        toggleSound: "Toggle Sound:",
        musicVolume: "Music Volume:",
        sfxVolume: "SFX Volume:",
        language: "Language:",
        toggleTimer: "Enable Timer:", // New
        timerDuration: "Timer Duration (seconds):", // New
        seconds: "s", // New
        moreSettingsSoon: "More settings coming soon...",
        backToMainMenu: "Back to Main Menu",
        developerInfoTitle: "Developer Info",
        devInfoText1: "This game was developed by ZentOfficial.",
        devInfoText2: "The game was developed for the purpose of learning, training, and mastering the C++ language.",
        devInfoText3: "For any inquiries, contact the following account:",
        instagramLinkText: "ZentOfficial", // Text for Instagram link
        contactUsLabel: "For inquiries, contact:", // New label for contact info
        runExampleText: "Run Example", // Text for run example button
        learnWithUsTitle: "Learn With Us",
        cppBasicsTitle: "C++ Basics",
        cppBasicsText: "C++ is a powerful and versatile programming language, used in operating systems, games, high-performance applications, and more. To learn it correctly, start with the basics:",
        variablesDataTypes: "Variables and Data Types: Understand how to store data (numbers, text, boolean values).",
        operators: "Operators: How to perform arithmetic and logical operations.",
        controlStructures: "Control Structures: Such as `if/else` statements for decision-making, and `for/while` loops for repetition.",
        functions: "Functions: Organizing code into reusable units.",
        arrays: "Arrays: Storing collections of data.",
        pointers: "Pointers: Directly dealing with memory (a slightly advanced concept).",
        oop: "Object-Oriented Programming (OOP): Understanding Classes and Objects and related concepts.",
        idesTitle: "Programming Software and IDEs",
        idesText: "To write and run C++ code, you will need an Integrated Development Environment (IDE) and a Compiler. Here are some common options and how to get started:",
        vsCodeTitle: "Visual Studio Code (VS Code):",
        vsCodeDesc: "A lightweight and powerful code editor with excellent C++ support via extensions (e.g., C/C++ Extension Pack).",
        vsCodeHowTo: "How to get started:",
        vsCodeStep1: "Download VS Code from the official website.",
        vsCodeStep2: "Install the C/C++ Extension from the marketplace.",
        vsCodeStep3: "Install a GCC/MinGW compiler (for Windows) or use the built-in compiler (for Linux/macOS).",
        vsCodeStep4: "Create a project:",
        vsCodeStep4Desc: "Open a folder, create a `.cpp` file, then use `Run and Debug` options to execute code.",
        vsCodeFirstCode: "First code:",
        visualStudioTitle: "Microsoft Visual Studio:",
        visualStudioDesc: "A very powerful and comprehensive IDE for Windows, suitable for large projects.",
        visualStudioHowTo: "How to get started:",
        visualStudioStep1: "Download Visual Studio Community Edition (free) from Microsoft's website.",
        visualStudioStep2: "Select \"Desktop development with C++\" during installation.",
        visualStudioStep3: "Create a project:",
        visualStudioStep3Desc: "File > New > Project > Console App.",
        visualStudioFirstCode: "First code:",
        codeBlocksTitle: "Code::Blocks:",
        codeBlocksDesc: "A free and open-source IDE, lightweight and easy to use for beginners.",
        codeBlocksHowTo: "How to get started:",
        codeBlocksStep1: "Download Code::Blocks with MinGW bundle (includes compiler).",
        codeBlocksStep2: "Create a project:",
        codeBlocksStep2Desc: "File > New > Project > Console application.",
        codeBlocksFirstCode: "First code:",
        librariesTitle: "Essential C++ Libraries",
        librariesText: "Libraries are collections of pre-written functions and definitions that help you perform specific tasks easily. Here are some essential libraries:",
        iostreamLib: "`<iostream>` (Input/Output Stream):",
        iostreamLibDesc: "Used for standard input and output (like screen and keyboard).",
        stringLib: "`<string>` (String Manipulation):",
        stringLibDesc: "For creating and manipulating text strings.",
        vectorLib: "`<vector>` (Dynamic Array):",
        vectorLibDesc: "For creating dynamic arrays that can change size.",
        cmathLib: "`<cmath>` (Mathematical Functions):",
        cmathLibDesc: "Contains mathematical functions like square root, power, sine, etc.",
        fstreamLib: "`<fstream>` (File Stream):",
        fstreamLibDesc: "For reading from and writing to files.",
        howToLinkLib: "How to link a library:",
        howToLinkLibDesc: "Simply use `#include <library_name>` at the beginning of your code file. For example: `#include <iostream>`.",
        additionalResources: "Additional Learning Resources",
        additionalResourcesText: "To deepen your understanding, we recommend utilizing various resources:",
        videoTutorials: "Video Tutorials:",
        articlesBlogs: "Articles and Blogs:",
        books: "Books:",
        smallProjects: "Small Projects:",
        noteSimulation: "Note: This game provides a simulation of the programming environment. In reality, you will need to install a C++ compiler (like GCC) and an Integrated Development Environment (IDE) to run your code.",
        selectStageTitle: "Select Stage",
        returnToMainMenu: "Back to Main Menu",
        runCodeButton: "Run Code",
        hintButton: "Hint",
        returnToStages: "Back to Stages",
        nextStage: "Next Stage",
        congratulationsTitle: "Congratulations!",
        endMessage: "You have completed all stages and become a C++ master!",
        restartButton: "Restart Game",
        locked: "(Locked)",
        completed: "(Completed)",
        loading: "Loading...",
        codeBuildError: "Code build error:",
        outputError: "Output error or incomplete code. Please try again. \nExpected output:",
        timerExpired: "Time's up! You did not complete the stage in time.", // New
        example: "Example:",
        imageOfConsoleOutput: "Console Output Image",
        imageOfTextString: "Text String Image",
        imageOfDynamicArray: "Dynamic Array Image",
        imageOfMathSymbols: "Math Symbols Image",
        imageOfFileIcon: "File Icon Image",
        goText: "GO!", // New translation for countdown
        settingsInGame: "Settings" // New translation for settings button in game
    }
};

// Define the stages of the game with localized content
const stages = [
    {
        title: { ar: "المرحلة 1: أول برنامج لك - 'Hello, C++!'", en: "Stage 1: Your First Program - 'Hello, C++!'" },
        concept: { ar: "تعلم كيفية كتابة وتشغيل برنامجك الأول في C++ لطباعة رسالة على الشاشة.", en: "Learn how to write and run your first C++ program to print a message to the screen." },
        task: { ar: "اكتب برنامج C++ يطبع النص التالي: 'مرحباً، C++!' على سطر جديد.", en: "Write a C++ program that prints the following text: 'Hello, C++!' on a new line." },
        initialCode: `#include <iostream>\n\nint main() {\n    // اكتب الكود هنا\n    \n    return 0;\n}`,
        expectedOutput: "مرحباً، C++!\n", // Expected output remains consistent regardless of UI language
        codeValidation: (code) => {
            const hasInclude = /#include\s*<iostream>/.test(code);
            const hasMain = /int\s*main\s*\(\s*\)/.test(code);
            const hasCout = /std::cout\s*<<\s*["']مرحباً، C\+\+!["']\s*<<\s*std::endl\s*;/.test(code) ||
                             /cout\s*<<\s*["']مرحباً، C\+\+!["']\s*<<\s*endl\s*;/.test(code);

            if (!hasInclude) return translations[currentLanguage].cppBasicsText; // More specific error in translation
            if (!hasMain) return translations[currentLanguage].cppBasicsText;
            if (!hasCout) return translations[currentLanguage].cppBasicsText;
            return true;
        },
        hint: { ar: "تذكر أن تستخدم `std::cout` لطباعة النص، و`std::endl` لإنشاء سطر جديد، ولا تنسَ `return 0;` في نهاية الدالة الرئيسية.", en: "Remember to use `std::cout` to print text, `std::endl` to create a new line, and don't forget `return 0;` at the end of the main function." }
    },
    {
        title: { ar: "المرحلة 2: المتغيرات وأنواع البيانات", en: "Stage 2: Variables and Data Types" },
        concept: { ar: "تعلم كيفية الإعلان عن المتغيرات وتخزين أنواع مختلفة من البيانات.", en: "Learn how to declare variables and store different types of data." },
        task: { ar: "أعلن عن متغير من نوع عدد صحيح (int) باسم `age` وأعطه القيمة 25. ثم اطبع قيمة هذا المتغير على الشاشة.", en: "Declare an integer (int) variable named `age` and assign it the value 25. Then print the value of this variable to the screen." },
        initialCode: `#include <iostream>\n\nint main() {\n    // Write your code here\n    \n    return 0;\n}`,
        expectedOutput: "25\n",
        codeValidation: (code) => {
            const hasIntDeclaration = /int\s+age\s*=\s*25\s*;/i.test(code);
            const hasCoutAge = /std::cout\s*<<\s*age\s*<<\s*std::endl\s*;/.test(code) ||
                                 /cout\s*<<\s*age\s*<<\s*endl\s*;/.test(code);

            if (!hasIntDeclaration) return translations[currentLanguage].variablesDataTypes;
            if (!hasCoutAge) return translations[currentLanguage].variablesDataTypes;
            return true;
        },
        hint: { ar: "ابدأ بإعلان `int age = 25;` ثم استخدم `std::cout << age << std::endl;`.", en: "Start by declaring `int age = 25;` then use `std::cout << age << std::endl;`." }
    },
    {
        title: { ar: "المرحلة 3: العمليات الحسابية", en: "Stage 3: Arithmetic Operations" },
        concept: { ar: "استخدام العمليات الحسابية الأساسية مثل الجمع والطرح والضرب والقسمة.", en: "Use basic arithmetic operations like addition, subtraction, multiplication, and division." },
        task: { ar: "أعلن عن متغيرين صحيحين `num1` بقيمة 10 و`num2` بقيمة 5. احسب مجموعهما واطبعه على الشاشة.", en: "Declare two integer variables `num1` with value 10 and `num2` with value 5. Calculate their sum and print it to the screen." },
        initialCode: `#include <iostream>\n\nint main() {\n    // Write your code here\n    \n    return 0;\n}`,
        expectedOutput: "15\n",
        codeValidation: (code) => {
            const hasNum1 = /int\s+num1\s*=\s*10\s*;/i.test(code);
            const hasNum2 = /int\s+num2\s*=\s*5\s*;/i.test(code);
            const hasSumPrint = /std::cout\s*<<\s*\(?\s*num1\s*\+\s*num2\s*\)?\s*<<\s*std::endl\s*;/.test(code) ||
                                 /cout\s*<<\s*\(?\s*num1\s*\+\s*num2\s*\)?\s*<<\s*endl\s*;/.test(code);

            if (!hasNum1 || !hasNum2) return translations[currentLanguage].operators;
            if (!hasSumPrint) return translations[currentLanguage].operators;
            return true;
        },
        hint: { ar: "يمكنك جمع المتغيرات مباشرة داخل جملة الطباعة: `std::cout << num1 + num2 << std::endl;`.", en: "You can sum variables directly within the print statement: `std::cout << num1 + num2 << std::endl;`." }
    },
    {
        title: { ar: "المرحلة 4: جملة If الشرطية", en: "Stage 4: If Statement" },
        concept: { ar: "تعلم كيفية استخدام جملة `if` لاتخاذ القرارات في برنامجك.", en: "Learn how to use the `if` statement to make decisions in your program." },
        task: { ar: "أعلن عن متغير صحيح `score` بقيمة 85. استخدم جملة `if` لطباعة 'ناجح' إذا كانت `score` أكبر من أو تساوي 50.", en: "Declare an integer variable `score` with value 85. Use an `if` statement to print 'Success' if `score` is greater than or equal to 50." },
        initialCode: `#include <iostream>\n\nint main() {\n    // Write your code here\n    \n    return 0;\n}`,
        expectedOutput: "ناجح\n",
        codeValidation: (code) => {
            const hasScore = /int\s+score\s*=\s*85\s*;/i.test(code);
            const hasIfStatement = /if\s*\(score\s*>=\s*50\)\s*\{\s*(std::)?cout\s*<<\s*["']ناجح["']\s*<<\s*(std::)?endl\s*;/.test(code);

            if (!hasScore) return translations[currentLanguage].controlStructures;
            if (!hasIfStatement) return translations[currentLanguage].controlStructures;
            return true;
        },
        hint: { ar: "تذكر أن بناء جملة `if` هو `if (condition) { // code }`.", en: "Remember that the `if` statement syntax is `if (condition) { // code }`." }
    },
    {
        title: { ar: "المرحلة 5: جملة If-Else الشرطية", en: "Stage 5: If-Else Statement" },
        concept: { ar: "استخدام `if-else` لتنفيذ كود مختلف بناءً على شرط.", en: "Use `if-else` to execute different code based on a condition." },
        task: { ar: "أعلن عن متغير صحيح `temp` بقيمة 20. إذا كانت `temp` أكبر من 25، اطبع 'حار'. وإلا، اطبع 'معتدل'.", en: "Declare an integer variable `temp` with value 20. If `temp` is greater than 25, print 'Hot'. Otherwise, print 'Moderate'." },
        initialCode: `#include <iostream>\n\nint main() {\n    // Write your code here\n    \n    return 0;\n}`,
        expectedOutput: "معتدل\n",
        codeValidation: (code) => {
            const hasTemp = /int\s+temp\s*=\s*20\s*;/i.test(code);
            const hasIfElse = /if\s*\(temp\s*>\s*25\)\s*\{\s*(std::)?cout\s*<<\s*["']حار["']/.test(code) &&
                                 /else\s*\{\s*(std::)?cout\s*<<\s*["']معتدل["']/.test(code);
            if (!hasTemp) return translations[currentLanguage].controlStructures;
            if (!hasIfElse) return translations[currentLanguage].controlStructures;
            return true;
        },
        hint: { ar: "بناء جملة `if-else` هو `if (condition) { // code } else { // code }`.", en: "The `if-else` statement syntax is `if (condition) { // code } else { // code }`." }
    },
    {
        title: { ar: "المرحلة 6: حلقة For التكرارية", en: "Stage 6: For Loop" },
        concept: { ar: "تعلم كيفية استخدام حلقة `for` لتكرار كتلة من التعليمات البرمجية لعدد محدد من المرات.", en: "Learn how to use a `for` loop to repeat a block of code a specific number of times." },
        task: { ar: "استخدم حلقة `for` لطباعة الأرقام من 1 إلى 3، كل رقم على سطر جديد.", en: "Use a `for` loop to print numbers from 1 to 3, each on a new line." },
        initialCode: `#include <iostream>\n\nint main() {\n    // Write your code here\n    \n    return 0;\n}`,
        expectedOutput: "1\n2\n3\n",
        codeValidation: (code) => {
            const hasForLoop = /for\s*\(int\s+i\s*=\s*1\s*;\s*i\s*<=\s*3\s*;\s*i\s*\+\+\s*\)\s*\{\s*(std::)?cout\s*<<\s*i\s*<<\s*(std::)?endl\s*;\s*\}/.test(code);
            if (!hasForLoop) return translations[currentLanguage].controlStructures;
            return true;
        },
        hint: { ar: "بناء جملة `for` هو `for (initialization; condition; update) { // code }`.", en: "The `for` loop syntax is `for (initialization; condition; update) { // code }`." }
    },
    {
        title: { ar: "المرحلة 7: الدوال (Functions)", en: "Stage 7: Functions" },
        concept: { ar: "فهم كيفية تعريف واستدعاء الدوال لتنظيم الشيفرة وإعادة استخدامها.", en: "Understand how to define and call functions to organize and reuse code." },
        task: { ar: "أنشئ دالة باسم `greet` لا تأخذ أي معاملات وتطبع 'أهلاً بك في C++!'. ثم استدعِ هذه الدالة في الدالة الرئيسية.", en: "Create a function named `greet` that takes no arguments and prints 'Welcome to C++!'. Then call this function in the main function." },
        initialCode: `#include <iostream>\n\n// Define your function here\n\nint main() {\n    // Call the function here\n    \n    return 0;\n}`,
        expectedOutput: "أهلاً بك في C++!\n",
        codeValidation: (code) => {
            const hasGreetFunction = /void\s+greet\s*\(\s*\)\s*\{\s*(std::)?cout\s*<<\s*["']أهلاً بك في C\+\+!["']\s*<<\s*(std::)?endl\s*;/.test(code);
            const hasFunctionCall = /greet\s*\(\s*\);/.test(code);
            if (!hasGreetFunction) return translations[currentLanguage].functions;
            if (!hasFunctionCall) return translations[currentLanguage].functions;
            return true;
        },
        hint: { ar: "الدالة التي لا ترجع قيمة تُعرف بـ `void`. استدعِ الدالة بكتابة اسمها متبوعًا بقوسين وفصلة منقوطة.", en: "A function that returns no value is defined with `void`. Call the function by writing its name followed by parentheses and a semicolon." }
    },
    {
        title: { ar: "المرحلة 8: المصفوفات (Arrays)", en: "Stage 8: Arrays" },
        concept: { ar: "تعلم كيفية الإعلان عن المصفوفات وتخزين مجموعات من البيانات من نفس النوع.", en: "Learn how to declare arrays and store collections of data of the same type." },
        task: { ar: "أعلن عن مصفوفة من الأعداد الصحيحة باسم `numbers` تحتوي على القيم 10، 20، 30. ثم اطبع العنصر الأول من المصفوفة.", en: "Declare an integer array named `numbers` containing the values 10, 20, 30. Then print the first element of the array." },
        initialCode: `#include <iostream>\n\nint main() {\n    // Write your code here\n    \n    return 0;\n}`,
        expectedOutput: "10\n",
        codeValidation: (code) => {
            const hasArrayDeclaration = /int\s+numbers\[\]\s*=\s*\{\s*10,\s*20,\s*30\s*\};/.test(code) ||
                                         /int\s+numbers\[3\]\s*=\s*\{\s*10,\s*20,\s*30\s*\};/.test(code);
            const hasPrintFirstElement = /std::cout\s*<<\s*numbers\[0\]\s*<<\s*std::endl\s*;/.test(code) ||
                                         /cout\s*<<\s*numbers\[0\]\s*<<\s*endl\s*;/.test(code);
            if (!hasArrayDeclaration) return translations[currentLanguage].arrays;
            if (!hasPrintFirstElement) return translations[currentLanguage].arrays;
            return true;
        },
        hint: { ar: "تبدأ فهارس المصفوفات من 0. للإعلان عن مصفوفة: `int arr[] = {val1, val2, ...};`.", en: "Array indices start from 0. To declare an array: `int arr[] = {val1, val2, ...};`." }
    },
    {
        title: { ar: "المرحلة 9: المؤشرات (Pointers)", en: "Stage 9: Pointers" },
        concept: { ar: "فهم المؤشرات وكيفية استخدامها للوصول إلى عناوين الذاكرة.", en: "Understand pointers and how to use them to access memory addresses." },
        task: { ar: "أعلن عن متغير صحيح `value` بقيمة 42. أعلن عن مؤشر `ptr` يشير إلى `value`. اطبع قيمة `value` باستخدام المؤشر.", en: "Declare an integer variable `value` with value 42. Declare a pointer `ptr` that points to `value`. Print the value of `value` using the pointer." },
        initialCode: `#include <iostream>\n\nint main() {\n    // Write your code here\n    \n    return 0;\n}`,
        expectedOutput: "42\n",
        codeValidation: (code) => {
            const hasValue = /int\s+value\s*=\s*42\s*;/i.test(code);
            const hasPointerDeclaration = /int\s*\*\s*ptr\s*=\s*&value\s*;/i.test(code);
            const hasDereferencePrint = /std::cout\s*<<\s*\*\s*ptr\s*<<\s*std::endl\s*;/.test(code) ||
                                         /cout\s*<<\s*\*\s*ptr\s*<<\s*endl\s*;/.test(code);
            if (!hasValue) return translations[currentLanguage].pointers;
            if (!hasPointerDeclaration) return translations[currentLanguage].pointers;
            if (!hasDereferencePrint) return translations[currentLanguage].pointers;
            return true;
        },
        hint: { ar: "للحصول على عنوان متغير استخدم `&`. للوصول إلى القيمة التي يشير إليها المؤشر استخدم `*`.", en: "To get the address of a variable use `&`. To access the value pointed to by a pointer use `*`." }
    },
    {
        title: { ar: "المرحلة 10: الفئات والكائنات (Classes & Objects)", en: "Stage 10: Classes & Objects" },
        concept: { ar: "مقدمة للبرمجة كائنية التوجه (OOP) من خلال الفئات والكائنات.", en: "Introduction to Object-Oriented Programming (OOP) through classes and objects." },
        task: { ar: "أنشئ فئة (class) بسيطة باسم `Car` تحتوي على خاصية عامة (public) اسمها `brand` من نوع `std::string`. أنشئ كائناً (object) من هذه الفئة، عيّن لخاصية `brand` القيمة 'Toyota'، ثم اطبع هذه القيمة.", en: "Create a simple class named `Car` with a public property named `brand` of type `std::string`. Create an object of this class, assign the value 'Toyota' to the `brand` property, then print this value." },
        initialCode: `#include <iostream>\n#include <string>\n\n// Define your class here\n\nint main() {\n    // Create an object and print the property here\n    \n    return 0;\n}`,
        expectedOutput: "Toyota\n",
        codeValidation: (code) => {
            const hasClassDefinition = /class\s+Car\s*\{\s*public:\s*std::string\s+brand\s*;\s*\};/.test(code) ||
                                       /class\s+Car\s*\{\s*public:\s*string\s+brand\s*;\s*\};/.test(code);
            const hasObjectCreation = /Car\s+myCar\s*;\s*/.test(code);
            const hasBrandAssignment = /myCar\.brand\s*=\s*["']Toyota["']\s*;/i.test(code);
            const hasPrintBrand = /std::cout\s*<<\s*myCar\.brand\s*<<\s*std::endl\s*;/.test(code) ||
                                   /cout\s*<<\s*myCar\.brand\s*<<\s*endl\s*;/.test(code);

            if (!hasClassDefinition) return translations[currentLanguage].oop;
            if (!hasObjectCreation) return translations[currentLanguage].oop;
            if (!hasBrandAssignment) return translations[currentLanguage].oop;
            if (!hasPrintBrand) return translations[currentLanguage].oop;
            return true;
        },
        hint: { ar: "الفئات تُعرف بـ `class ClassName { public: /* members */ };`. الكائنات تُنشأ بـ `ClassName objectName;`. للوصول إلى الأعضاء استخدم `.`.", en: "Classes are defined with `class ClassName { public: /* members */ };`. Objects are created with `ClassName objectName;`. To access members use `.`." }
    }
];

let currentStageIndex = 0;
let score = 0;
let completedStages = JSON.parse(localStorage.getItem('completedStages') || '[]');
let soundEnabled = true; // Initial sound state
let timerEnabled = JSON.parse(localStorage.getItem('timerEnabled') || 'false'); // New: Timer enabled state
let timerDuration = parseInt(localStorage.getItem('timerDuration') || '60'); // New: Timer duration in seconds
let currentTimer = timerDuration; // New: Current time remaining
let timerInterval; // New: To store the setInterval ID for the timer
let currentLanguage = localStorage.getItem('gameLanguage') || 'ar'; // Default to Arabic

// New: Global variable to track the screen from which settings were opened
let previousScreenId = 'startMenu'; // Default to start menu

// Tone.js Synths for sounds
let clickSynth, successSynth, errorSynth, musicSynth, countdownSynth, goSynth, timerWarningSynth; // Added new synths

// Function to initialize Tone.js synths and music
function initAudio() {
    if (!clickSynth) { // Only initialize if not already initialized
        clickSynth = new Tone.Synth({
            oscillator: { type: "sine" },
            envelope: { attack: 0.01, decay: 0.05, sustain: 0.0, release: 0.1 }
        }).toDestination();
        successSynth = new Tone.Synth({
            oscillator: { type: "triangle" },
            envelope: { attack: 0.05, decay: 0.2, sustain: 0.1, release: 0.5 }
        }).toDestination();
        errorSynth = new Tone.Synth({
            oscillator: { type: "sawtooth" },
            envelope: { attack: 0.01, decay: 0.1, sustain: 0.05, release: 0.2 }
        }).toDestination();
        countdownSynth = new Tone.Synth({ // New synth for countdown beeps
            oscillator: { type: "square" },
            envelope: { attack: 0.01, decay: 0.1, sustain: 0.0, release: 0.1 }
        }).toDestination();
        goSynth = new Tone.Synth({ // New synth for "Go!" sound
            oscillator: { type: "triangle" },
            envelope: { attack: 0.05, decay: 0.3, sustain: 0.1, release: 0.5 }
        }).toDestination();
        timerWarningSynth = new Tone.Synth({ // New synth for timer warning
            oscillator: { type: "fmsine", modulationIndex: 3 },
            envelope: { attack: 0.01, decay: 0.1, sustain: 0.0, release: 0.2 },
            frequency: 400 // Starting frequency
        }).toDestination();


        // Music Synth (Ambient Pad)
        musicSynth = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: "sine" },
            envelope: { attack: 2, decay: 1, sustain: 0.5, release: 2 },
            volume: -15 // Start with a lower volume for music
        }).toDestination();

        // Simple ambient chord progression
        const chords = [
            ["C3", "E3", "G3"],
            ["F3", "A3", "C4"],
            ["G3", "B3", "D4"],
            ["C3", "E3", "G3"]
        ];
        let chordIndex = 0;
        const musicSequence = new Tone.Sequence((time, note) => {
            musicSynth.triggerAttackRelease(note, "2n", time);
        }, chords, "2n").start(0); // Loop every 2 notes/beats

        Tone.Transport.loop = true;
        Tone.Transport.loopEnd = "8m"; // Loop every 8 measures
        Tone.Transport.start(); // Start the transport for the sequence to play

        // Set initial volumes from localStorage or defaults
        const savedMusicVolume = localStorage.getItem('musicVolume');
        if (savedMusicVolume !== null) {
            musicSynth.volume.value = Tone.gainToDb(parseFloat(savedMusicVolume));
        } else {
            musicSynth.volume.value = Tone.gainToDb(0.5); // Default music volume
        }

        const savedSfxVolume = localStorage.getItem('sfxVolume');
        if (savedSfxVolume !== null) {
            const sfxVolDb = Tone.gainToDb(parseFloat(savedSfxVolume));
            clickSynth.volume.value = sfxVolDb;
            successSynth.volume.value = sfxVolDb;
            errorSynth.volume.value = sfxVolDb;
            countdownSynth.volume.value = sfxVolDb; // Set volume for new synths
            goSynth.volume.value = sfxVolDb; // Set volume for new synths
            timerWarningSynth.volume.value = sfxVolDb; // Set volume for new synths
        } else {
            const sfxVolDb = Tone.gainToDb(0.7); // Default SFX volume
            clickSynth.volume.value = sfxVolDb;
            successSynth.volume.value = sfxVolDb;
            errorSynth.volume.value = sfxVolDb;
            countdownSynth.volume.value = sfxVolDb; // Set default for new synths
            goSynth.volume.value = sfxVolDb; // Set default for new synths
            timerWarningSynth.volume.value = sfxVolDb; // Set default for new synths
        }

        // Start Tone.js context on first user interaction
        document.documentElement.addEventListener('mousedown', () => {
            if (Tone.context.state !== 'running') {
                Tone.start();
                console.log('AudioContext started');
            }
        }, { once: true });
    }
}

// Play sound functions
function playClickSound() {
    if (soundEnabled && clickSynth) clickSynth.triggerAttackRelease("C5", "16n");
}
function playSuccessSound() {
    if (soundEnabled && successSynth) successSynth.triggerAttackRelease("G4", "8n");
}
function playErrorSound() {
    if (soundEnabled && errorSynth) errorSynth.triggerAttackRelease("C3", "8n");
}
function playCountdownBeep() { // New function for countdown beep
    if (soundEnabled && countdownSynth) countdownSynth.triggerAttackRelease("C4", "8n");
}
function playGoSound() { // New function for "Go!" sound
    if (soundEnabled && goSynth) goSynth.triggerAttackRelease("E5", "4n");
}
function playTimerWarningSound() { // New function for timer warning sound
    if (soundEnabled && timerWarningSynth) timerWarningSynth.triggerAttackRelease("C#3", "16n");
}
function playStartSound() {
    // This is now handled by the continuous background music
    // if (soundEnabled && startSynth) startSynth.triggerAttackRelease("G4", "4n");
}


// Get DOM elements
const startMenu = document.getElementById('startMenu');
const settingsMenu = document.getElementById('settingsMenu');
const developerInfoMenu = document.getElementById('developerInfoMenu');
const learnWithUsMenu = document.getElementById('learnWithUsMenu');
const stageSelectionMenu = document.getElementById('stageSelectionMenu');
const stagesGrid = document.getElementById('stagesGrid');
const gameArea = document.getElementById('gameArea');
const endMenu = document.getElementById('endMenu');

const startButton = document.getElementById('startButton');
const settingsButton = document.getElementById('settingsButton');
const learnWithUsButton = document.getElementById('learnWithUsButton');
const developerInfoButton = document.getElementById('developerInfoButton');
const backToMainMenuFromSettings = document.getElementById('backToMainMenuFromSettings');
const backToMainMenuFromDeveloper = document.getElementById('backToMainMenuFromDeveloper');
const backToMainMenuFromLearn = document.getElementById('backToMainMenuFromLearn');
const backToMainMenuFromStages = document.getElementById('backToMainMenuFromStages');

const stageTitleElement = document.getElementById('stageTitle');
const taskDescriptionElement = document.getElementById('taskDescription');
const characterAvatar = document.getElementById('characterAvatar');
const codeEditor = document.getElementById('codeEditor');
const runButton = document.getElementById('runButton');
const hintButton = document.getElementById('hintButton');
const returnToStagesButton = document.getElementById('returnToStagesButton');
const settingsFromGameButton = document.getElementById('settingsFromGameButton'); // New: Settings button in game area
const consoleOutput = document.getElementById('consoleOutput');
const nextButton = document.getElementById('nextButton');
const endMessageElement = document.getElementById('endMessage');
const restartButton = document.getElementById('restartButton');
const returnToStagesFromEndButton = document.getElementById('returnToStagesFromEndButton');
const progressBarFill = document.getElementById('progressBarFill');
const confettiContainer = document.getElementById('confettiContainer');
const starBurstContainer = document.getElementById('starBurstContainer');
const loadingScreen = document.getElementById('loadingScreen');
const toggleSound = document.getElementById('toggleSound');
const musicVolumeSlider = document.getElementById('musicVolume');
const sfxVolumeSlider = document.getElementById('sfxVolume');
const languageSelect = document.getElementById('languageSelect');

// New countdown elements
const countdownOverlay = document.getElementById('countdownOverlay');
const countdownNumber = document.getElementById('countdownNumber');

// New timer elements
const timerDisplay = document.getElementById('timerDisplay');
const toggleTimer = document.getElementById('toggleTimer');
const timerDurationSlider = document.getElementById('timerDuration');
const timerDurationValueSpan = document.getElementById('timerDurationValue');


// Function to translate text
function translateText(key) {
    return translations[currentLanguage][key] || `MISSING_TRANSLATION_${key}`;
}

// Function to update all UI elements with current language
function updateUI() {
    // Main menu
    const gameTitleEl = document.getElementById('gameTitle');
    if (gameTitleEl) gameTitleEl.textContent = translateText('gameTitle');
    const sloganEl = document.getElementById('slogan');
    if (sloganEl) sloganEl.textContent = translateText('slogan');
    const startButtonEl = document.getElementById('startButton');
    if (startButtonEl) startButtonEl.innerHTML = `<i class="fas fa-play"></i> ${translateText('startButton')}`;
    const settingsButtonEl = document.getElementById('settingsButton');
    if (settingsButtonEl) settingsButtonEl.innerHTML = `<i class="fas fa-cog"></i> ${translateText('settingsButton')}`;
    const learnWithUsButtonEl = document.getElementById('learnWithUsButton');
    if (learnWithUsButtonEl) learnWithUsButtonEl.innerHTML = `<i class="fas fa-book-open"></i> ${translateText('learnWithUsButton')}`;
    const developerInfoButtonEl = document.getElementById('developerInfoButton');
    if (developerInfoButtonEl) developerInfoButtonEl.innerHTML = `<i class="fas fa-info-circle"></i> ${translateText('developerInfoButton')}`;
    
    const contactUsLabelEl = document.getElementById('contactUsLabel');
    if (contactUsLabelEl) contactUsLabelEl.textContent = translateText('contactUsLabel');
    const instagramLinkTextMainEl = document.getElementById('instagramLinkTextMain');
    if (instagramLinkTextMainEl) instagramLinkTextMainEl.textContent = translateText('instagramLinkText');


    // Settings menu
    const settingsMenuTitleEl = document.getElementById('settingsMenuTitle');
    if (settingsMenuTitleEl) settingsMenuTitleEl.textContent = translateText('settingsTitle');
    const toggleSoundLabelEl = document.getElementById('toggleSoundLabel');
    if (toggleSoundLabelEl) toggleSoundLabelEl.textContent = translateText('toggleSound');
    const musicVolumeLabelEl = document.getElementById('musicVolumeLabel');
    if (musicVolumeLabelEl) musicVolumeLabelEl.textContent = translateText('musicVolume');
    const sfxVolumeLabelEl = document.getElementById('sfxVolumeLabel');
    if (sfxVolumeLabelEl) sfxVolumeLabelEl.textContent = translateText('sfxVolume');
    const languageSelectLabelEl = document.getElementById('languageSelectLabel');
    if (languageSelectLabelEl) languageSelectLabelEl.textContent = translateText('language');
    
    // New Timer Settings UI Update
    const toggleTimerLabelEl = document.getElementById('toggleTimerLabel');
    if (toggleTimerLabelEl) toggleTimerLabelEl.textContent = translateText('toggleTimer');
    const timerDurationLabelEl = document.getElementById('timerDurationLabel');
    if (timerDurationLabelEl) timerDurationLabelEl.textContent = translateText('timerDuration');
    if (timerDurationValueSpan) timerDurationValueSpan.textContent = `${timerDurationSlider.value}${translateText('seconds')}`;
    // End New Timer Settings UI Update

    const moreSettingsSoonEl = document.getElementById('moreSettingsSoon');
    if (moreSettingsSoonEl) moreSettingsSoonEl.textContent = translateText('moreSettingsSoon');
    const backToMainMenuFromSettingsEl = document.getElementById('backToMainMenuFromSettings');
    if (backToMainMenuFromSettingsEl) backToMainMenuFromSettingsEl.innerHTML = `<i class="fas fa-arrow-left ml-2"></i> ${translateText('backToMainMenu')}`;

    // Developer info menu
    const developerInfoMenuTitleEl = document.getElementById('developerInfoMenuTitle');
    if (developerInfoMenuTitleEl) developerInfoMenuTitleEl.textContent = translateText('developerInfoTitle');
    const devInfoText1El = document.getElementById('devInfoText1');
    if (devInfoText1El) devInfoText1El.textContent = translateText('devInfoText1');
    const devInfoText2El = document.getElementById('devInfoText2');
    if (devInfoText2El) devInfoText2El.textContent = translateText('devInfoText2');
    const devInfoText3El = document.getElementById('devInfoText3');
    if (devInfoText3El) devInfoText3El.textContent = translateText('devInfoText3');
    
    const instagramLinkEl = document.getElementById('instagramLink');
    if (instagramLinkEl) instagramLinkEl.innerHTML = `<i class="fab fa-instagram text-4xl"></i><span class="text-sm mt-1">${translateText('instagramLinkText')}</span>`;

    const backToMainMenuFromDeveloperEl = document.getElementById('backToMainMenuFromDeveloper');
    if (backToMainMenuFromDeveloperEl) backToMainMenuFromDeveloperEl.innerHTML = `<i class="fas fa-arrow-left ml-2"></i> ${translateText('backToMainMenu')}`;

    // Learn With Us menu
    const learnWithUsMenuTitleEl = document.getElementById('learnWithUsMenuTitle');
    if (learnWithUsMenuTitleEl) learnWithUsMenuTitleEl.textContent = translateText('learnWithUsTitle');
    const cppBasicsTitleEl = document.getElementById('cppBasicsTitle');
    if (cppBasicsTitleEl) cppBasicsTitleEl.textContent = translateText('cppBasicsTitle');
    const cppBasicsTextEl = document.getElementById('cppBasicsText');
    if (cppBasicsTextEl) cppBasicsTextEl.textContent = translateText('cppBasicsText');
    const variablesDataTypesEl = document.getElementById('variablesDataTypes');
    if (variablesDataTypesEl) variablesDataTypesEl.textContent = translateText('variablesDataTypes');
    const operatorsEl = document.getElementById('operators');
    if (operatorsEl) operatorsEl.textContent = translateText('operators');
    const controlStructuresEl = document.getElementById('controlStructures');
    if (controlStructuresEl) controlStructuresEl.textContent = translateText('controlStructures');
    const functionsEl = document.getElementById('functions');
    if (functionsEl) functionsEl.textContent = translateText('functions');
    const arraysEl = document.getElementById('arrays');
    if (arraysEl) arraysEl.textContent = translateText('arrays');
    const pointersEl = document.getElementById('pointers');
    if (pointersEl) pointersEl.textContent = translateText('pointers');
    const oopEl = document.getElementById('oop');
    if (oopEl) oopEl.textContent = translateText('oop');
    const idesTitleEl = document.getElementById('idesTitle');
    if (idesTitleEl) idesTitleEl.textContent = translateText('idesTitle');
    const idesTextEl = document.getElementById('idesText');
    if (idesTextEl) idesTextEl.textContent = translateText('idesText');
    const vsCodeTitleEl = document.getElementById('vsCodeTitle');
    if (vsCodeTitleEl) vsCodeTitleEl.textContent = translateText('vsCodeTitle');
    const vsCodeDescEl = document.getElementById('vsCodeDesc');
    if (vsCodeDescEl) vsCodeDescEl.textContent = translateText('vsCodeDesc');
    const vsCodeHowToEl = document.getElementById('vsCodeHowTo');
    if (vsCodeHowToEl) vsCodeHowToEl.textContent = translateText('vsCodeHowTo');
    const vsCodeStep1El = document.getElementById('vsCodeStep1');
    if (vsCodeStep1El) vsCodeStep1El.textContent = translateText('vsCodeStep1');
    const vsCodeStep2El = document.getElementById('vsCodeStep2');
    if (vsCodeStep2El) vsCodeStep2El.textContent = translateText('vsCodeStep2');
    const vsCodeStep3El = document.getElementById('vsCodeStep3');
    if (vsCodeStep3El) vsCodeStep3El.textContent = translateText('vsCodeStep3');
    const vsCodeStep4El = document.getElementById('vsCodeStep4');
    if (vsCodeStep4El) vsCodeStep4El.textContent = translateText('vsCodeStep4');
    const vsCodeStep4DescEl = document.getElementById('vsCodeStep4Desc');
    if (vsCodeStep4DescEl) vsCodeStep4DescEl.textContent = translateText('vsCodeStep4Desc');
    const vsCodeFirstCodeEl = document.getElementById('vsCodeFirstCode');
    if (vsCodeFirstCodeEl) vsCodeFirstCodeEl.textContent = translateText('vsCodeFirstCode');
    const visualStudioTitleEl = document.getElementById('visualStudioTitle');
    if (visualStudioTitleEl) visualStudioTitleEl.textContent = translateText('visualStudioTitle');
    const visualStudioDescEl = document.getElementById('visualStudioDesc');
    if (visualStudioDescEl) visualStudioDescEl.textContent = translateText('visualStudioDesc');
    const visualStudioHowToEl = document.getElementById('visualStudioHowTo');
    if (visualStudioHowToEl) visualStudioHowToEl.textContent = translateText('visualStudioHowTo');
    const visualStudioStep1El = document.getElementById('visualStudioStep1');
    if (visualStudioStep1El) visualStudioStep1El.textContent = translateText('visualStudioStep1');
    const visualStudioStep2El = document.getElementById('visualStudioStep2');
    if (visualStudioStep2El) visualStudioStep2El.textContent = translateText('visualStudioStep2');
    const visualStudioStep3El = document.getElementById('visualStudioStep3');
    if (visualStudioStep3El) visualStudioStep3El.textContent = translateText('visualStudioStep3');
    const visualStudioStep3DescEl = document.getElementById('visualStudioStep3Desc');
    if (visualStudioStep3DescEl) visualStudioStep3DescEl.textContent = translateText('visualStudioStep3Desc');
    const visualStudioFirstCodeEl = document.getElementById('visualStudioFirstCode');
    if (visualStudioFirstCodeEl) visualStudioFirstCodeEl.textContent = translateText('visualStudioFirstCode');
    const codeBlocksTitleEl = document.getElementById('codeBlocksTitle');
    if (codeBlocksTitleEl) codeBlocksTitleEl.textContent = translateText('codeBlocksTitle');
    const codeBlocksDescEl = document.getElementById('codeBlocksDesc');
    if (codeBlocksDescEl) codeBlocksDescEl.textContent = translateText('codeBlocksDesc');
    const codeBlocksHowToEl = document.getElementById('codeBlocksHowTo');
    if (codeBlocksHowToEl) codeBlocksHowToEl.textContent = translateText('codeBlocksHowTo');
    const codeBlocksStep1El = document.getElementById('codeBlocksStep1');
    if (codeBlocksStep1El) codeBlocksStep1El.textContent = translateText('codeBlocksStep1');
    const codeBlocksStep2El = document.getElementById('codeBlocksStep2');
    if (codeBlocksStep2El) codeBlocksStep2El.textContent = translateText('codeBlocksStep2');
    const codeBlocksStep2DescEl = document.getElementById('codeBlocksStep2Desc');
    if (codeBlocksStep2DescEl) codeBlocksStep2DescEl.textContent = translateText('codeBlocksStep2Desc');
    const codeBlocksFirstCodeEl = document.getElementById('codeBlocksFirstCode');
    if (codeBlocksFirstCodeEl) codeBlocksFirstCodeEl.textContent = translateText('codeBlocksFirstCode');
    const librariesTitleEl = document.getElementById('librariesTitle');
    if (librariesTitleEl) librariesTitleEl.textContent = translateText('librariesTitle');
    const librariesTextEl = document = document.getElementById('librariesText');
    if (librariesTextEl) librariesTextEl.textContent = translateText('librariesText');
    const iostreamLibEl = document.getElementById('iostreamLib');
    if (iostreamLibEl) iostreamLibEl.textContent = translateText('iostreamLib');
    const iostreamLibDescEl = document.getElementById('iostreamLibDesc');
    if (iostreamLibDescEl) iostreamLibDescEl.textContent = translateText('iostreamLibDesc');
    const stringLibEl = document.getElementById('stringLib');
    if (stringLibEl) stringLibEl.textContent = translateText('stringLib');
    const stringLibDescEl = document.getElementById('stringLibDesc');
    if (stringLibDescEl) stringLibDescEl.textContent = translateText('stringLibDesc');
    const vectorLibEl = document.getElementById('vectorLib');
    if (vectorLibEl) vectorLibEl.textContent = translateText('vectorLib');
    const vectorLibDescEl = document.getElementById('vectorLibDesc');
    if (vectorLibDescEl) vectorLibDescEl.textContent = translateText('vectorLibDesc');
    const cmathLibEl = document.getElementById('cmathLib');
    if (cmathLibEl) cmathLibEl.textContent = translateText('cmathLib');
    const cmathLibDescEl = document.getElementById('cmathLibDesc');
    if (cmathLibDescEl) cmathLibDescEl.textContent = translateText('cmathLibDesc');
    const fstreamLibEl = document.getElementById('fstreamLib');
    if (fstreamLibEl) fstreamLibEl.textContent = translateText('fstreamLib');
    const fstreamLibDescEl = document.getElementById('fstreamLibDesc');
    if (fstreamLibDescEl) fstreamLibDescEl.textContent = translateText('fstreamLibDesc');
    const howToLinkLibDescEl = document.getElementById('howToLinkLibDesc');
    if (howToLinkLibDescEl) howToLinkLibDescEl.textContent = translateText('howToLinkLibDesc');
    const additionalResourcesEl = document.getElementById('additionalResources');
    if (additionalResourcesEl) additionalResourcesEl.textContent = translateText('additionalResources');
    const additionalResourcesTextEl = document.getElementById('additionalResourcesText');
    if (additionalResourcesTextEl) additionalResourcesTextEl.textContent = translateText('additionalResourcesText');
    const videoTutorialsEl = document.getElementById('videoTutorials');
    if (videoTutorialsEl) videoTutorialsEl.textContent = translateText('videoTutorials');
    const articlesBlogsEl = document.getElementById('articlesBlogs');
    if (articlesBlogsEl) articlesBlogsEl.textContent = translateText('articlesBlogs');
    const booksEl = document.getElementById('books');
    if (booksEl) booksEl.textContent = translateText('books');
    const smallProjectsEl = document.getElementById('smallProjects');
    if (smallProjectsEl) smallProjectsEl.textContent = translateText('smallProjects');
    const noteSimulationEl = document.getElementById('noteSimulation');
    if (noteSimulationEl) noteSimulationEl.textContent = translateText('noteSimulation');
    const backToMainMenuFromLearnEl = document.getElementById('backToMainMenuFromLearn');
    if (backToMainMenuFromLearnEl) backToMainMenuFromLearnEl.innerHTML = `<i class="fas fa-arrow-left ml-2"></i> ${translateText('backToMainMenu')}`;

    // Stage selection menu
    const selectStageTitleEl = document.getElementById('selectStageTitle');
    if (selectStageTitleEl) selectStageTitleEl.textContent = translateText('selectStageTitle');
    const backToMainMenuFromStagesEl = document.getElementById('backToMainMenuFromStages');
    if (backToMainMenuFromStagesEl) backToMainMenuFromStagesEl.innerHTML = `<i class="fas fa-arrow-left ml-2"></i> ${translateText('backToMainMenu')}`;

    // Game area
    // stageTitleElement and taskDescriptionElement are updated by loadStage()
    const runButtonEl = document.getElementById('runButton');
    if (runButtonEl) runButtonEl.innerHTML = `<i class="fas fa-play ml-2"></i> ${translateText('runCodeButton')}`;
    const hintButtonEl = document.getElementById('hintButton');
    if (hintButtonEl) hintButtonEl.innerHTML = `<i class="fas fa-lightbulb ml-2"></i> ${translateText('hintButton')}`;
    const returnToStagesButtonEl = document.getElementById('returnToStagesButton');
    if (returnToStagesButtonEl) returnToStagesButtonEl.innerHTML = `<i class="fas fa-list ml-2"></i> ${translateText('returnToStages')}`;
    const nextButtonEl = document.getElementById('nextButton');
    if (nextButtonEl) nextButtonEl.innerHTML = `<i class="fas fa-arrow-right ml-2"></i> ${translateText('nextStage')}`;
    // New: Settings button in game area
    const settingsFromGameButtonEl = document.getElementById('settingsFromGameButton');
    if (settingsFromGameButtonEl) settingsFromGameButtonEl.innerHTML = `<i class="fas fa-cog ml-2"></i> ${translateText('settingsInGame')}`;


    // End menu
    const congratulationsTitleEl = document.getElementById('congratulationsTitle');
    if (congratulationsTitleEl) congratulationsTitleEl.textContent = translateText('congratulationsTitle');
    const endMessageEl = document.getElementById('endMessage');
    if (endMessageEl) endMessageEl.textContent = translateText('endMessage');
    const restartButtonEl = document.getElementById('restartButton');
    if (restartButtonEl) restartButtonEl.innerHTML = `<i class="fas fa-redo ml-2"></i> ${translateText('restartButton')}`;
    const returnToStagesFromEndButtonEl = document.getElementById('returnToStagesFromEndButton');
    if (returnToStagesFromEndButtonEl) returnToStagesFromEndButtonEl.innerHTML = `<i class="fas fa-list ml-2"></i> ${translateText('returnToStages')}`;

    // Loading screen
    const loadingTextEl = document.getElementById('loadingText');
    if (loadingTextEl) loadingTextEl.textContent = translateText('loading');

    // Update dynamic text in stages (will be called by loadStage and populateStageSelectionMenu)
    populateStageSelectionMenu();
    // loadStage() is now called after countdown, so no need to call it here directly
    // if (gameArea.classList.contains('hidden') === false) { // Only load stage if game area is visible
    //     loadStage(); // Reload current stage to update its text
    // }
}

// Function to show a specific screen with smooth transition
function showScreen(screenId) {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.classList.add('fade-out'); // Start fade-out animation

    // Stop timer if switching away from game area
    if (screenId !== 'gameArea') {
        stopTimer();
    }

    setTimeout(() => {
        loadingScreen.classList.add('active'); // Show loading screen during transition
        setTimeout(() => {
            const screens = [startMenu, settingsMenu, developerInfoMenu, learnWithUsMenu, stageSelectionMenu, gameArea, endMenu];
            screens.forEach(screen => {
                // Reset scroll position for all main-screen divs
                screen.scrollTop = 0; // Reset scroll directly on the main screen div

                if (screen.id === screenId) {
                    screen.classList.remove('hidden');
                } else {
                    screen.classList.add('hidden');
                }
            });
            loadingScreen.classList.remove('active'); // Hide loading screen
            gameContainer.classList.remove('fade-out'); // Remove fade-out class
            gameContainer.classList.add('fade-in'); // Start fade-in animation
            setTimeout(() => {
                gameContainer.classList.remove('fade-in'); // Remove fade-in after completion
            }, 700); // Match CSS transition duration
        }, 500); // Simulate a short loading time for screen change
    }, 700); // Match CSS transition duration for fade-out
}

// Function to start the game (transitions to stage selection)
function startGameFlow() {
    playStartSound();
    showScreen('stageSelectionMenu');
    populateStageSelectionMenu();
}

// Function to populate the stage selection menu
function populateStageSelectionMenu() {
    stagesGrid.innerHTML = ''; // Clear previous buttons
    stages.forEach((stage, index) => {
        const button = document.createElement('button');
        button.classList.add('stage-button', 'text-xl', 'font-semibold', 'p-6', 'rounded-xl', 'transition', 'duration-300', 'ease-in-out');
        button.innerHTML = `<i class="fas fa-code text-3xl mb-2 text-purple-300"></i><span class="text-lg">${stage.title[currentLanguage]}</span>`;

        const isLocked = index > 0 && !completedStages.includes(index - 1);
        if (isLocked) {
            button.classList.add('locked');
            button.innerHTML = `<i class="fas fa-lock lock-icon"></i><i class="fas fa-code text-3xl mb-2 text-gray-500"></i><span class="text-lg text-gray-400">${stage.title[currentLanguage]}</span><span class="text-sm mt-1 text-gray-500">${translateText('locked')}</span>`;
            button.disabled = true; // Disable button
        } else {
            button.onclick = () => {
                playClickSound();
                selectStage(index); // This will now trigger the countdown
            };
            if (completedStages.includes(index)) {
                button.classList.add('completed');
                button.innerHTML = `<i class="fas fa-check-circle text-3xl mb-2 text-green-200"></i><span class="text-lg">${stage.title[currentLanguage]}</span><span class="text-sm mt-1 text-green-100">${translateText('completed')}</span>`;
            }
        }
        stagesGrid.appendChild(button);
    });
}

// Function to select and load a specific stage (now includes countdown)
function selectStage(index) {
    currentStageIndex = index;
    score = 0; // Reset score for the current attempt
    showScreen('gameArea'); // Show game area, countdown will overlay it
    startCountdown(); // Start countdown before loading stage content
}

// Function to start the countdown
function startCountdown() {
    let count = 5;
    countdownOverlay.classList.add('active'); // Show overlay
    countdownNumber.textContent = count;
    countdownNumber.style.animation = 'none'; // Reset animation
    void countdownNumber.offsetWidth; // Trigger reflow
    countdownNumber.style.animation = 'countdown-scale 1s ease-out forwards'; // Restart animation
    playCountdownBeep();

    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            countdownNumber.textContent = count;
            countdownNumber.style.animation = 'none'; // Reset animation
            void countdownNumber.offsetWidth; // Trigger reflow
            countdownNumber.style.animation = 'countdown-scale 1s ease-out forwards'; // Restart animation
            playCountdownBeep();
        } else if (count === 0) {
            countdownNumber.textContent = translateText('goText'); // "Go!" or "انطلق!"
            countdownNumber.style.animation = 'none'; // Reset animation
            void countdownNumber.offsetWidth; // Trigger reflow
            countdownNumber.style.animation = 'countdown-scale 1s ease-out forwards'; // Restart animation
            playGoSound();
        } else {
            clearInterval(countdownInterval);
            countdownOverlay.classList.remove('active'); // Hide overlay
            // Now load the stage content after countdown
            loadStage();
        }
    }, 1000);
}

// Function to load a new stage
function loadStage() {
    if (currentStageIndex >= stages.length) {
        endGame();
        return;
    }

    const stage = stages[currentStageIndex];
    if (stageTitleElement) stageTitleElement.textContent = stage.title[currentLanguage];
    if (taskDescriptionElement) taskDescriptionElement.textContent = stage.task[currentLanguage];
    if (characterAvatar) characterAvatar.textContent = '😊'; // Reset character mood
    if (characterAvatar) characterAvatar.classList.remove('happy', 'sad');
    if (codeEditor) codeEditor.value = stage.initialCode || ''; // Load initial code or empty
    if (consoleOutput) consoleOutput.textContent = ''; // Clear console
    if (consoleOutput) consoleOutput.classList.remove('error', 'shake'); // Remove error and shake class
    if (nextButton) nextButton.classList.add('hidden'); // Hide next button
    if (hintButton) hintButton.classList.remove('hidden'); // Show hint button
    if (runButton) runButton.disabled = false; // Enable run button

    updateProgressBar();
    startStageTimer(); // Start the stage timer if enabled
}

// New: Function to start the stage timer
function startStageTimer() {
    stopTimer(); // Clear any existing timer
    if (timerEnabled) {
        currentTimer = timerDuration;
        timerDisplay.textContent = `${currentTimer}${translateText('seconds')}`;
        timerDisplay.classList.remove('hidden'); // Show timer display
        timerInterval = setInterval(() => {
            currentTimer--;
            timerDisplay.textContent = `${currentTimer}${translateText('seconds')}`;
            if (currentTimer <= 10 && currentTimer > 0) { // Play warning sound for last 10 seconds
                playTimerWarningSound();
            }
            if (currentTimer <= 0) {
                stopTimer();
                handleTimerExpired();
            }
        }, 1000);
    } else {
        timerDisplay.classList.add('hidden'); // Hide timer display if disabled
    }
}

// New: Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
}

// New: Function to handle timer expiration
function handleTimerExpired() {
    playErrorSound();
    if (consoleOutput) consoleOutput.textContent = translateText('timerExpired');
    if (consoleOutput) consoleOutput.classList.add('error', 'shake');
    updateCharacterMood('sad');
    if (runButton) runButton.disabled = true; // Disable further attempts
    if (hintButton) hintButton.classList.add('hidden'); // Hide hint
    if (nextButton) nextButton.classList.add('hidden'); // Hide next stage button
}


// Function to simulate code execution and validation
function runCode() {
    playClickSound(); // Play click sound when running code
    const userCode = codeEditor.value;
    const stage = stages[currentStageIndex];
    if (consoleOutput) consoleOutput.textContent = ''; // Clear previous output
    if (consoleOutput) consoleOutput.classList.remove('error', 'shake'); // Reset error and shake state

    // Basic validation of code structure
    const validationResult = stage.codeValidation(userCode);
    if (validationResult !== true) {
        playErrorSound(); // Play error sound
        if (consoleOutput) consoleOutput.textContent = `${translateText('codeBuildError')} ${validationResult}`;
        if (consoleOutput) consoleOutput.classList.add('error', 'shake'); // Add shake effect
        updateCharacterMood('sad');
        return;
    }

    // Simulate execution based on expected output
    // Note: Expected output is hardcoded in Arabic or English based on the stage definition.
    // For true multilingual output, the expected output itself would need to be localized or generated.
    if (userCode.includes(stage.expectedOutput.trim())) {
        playSuccessSound(); // Play success sound
        if (consoleOutput) consoleOutput.textContent = stage.expectedOutput;
        if (consoleOutput) consoleOutput.style.color = 'var(--success-color)'; // Green for success
        score++; // Increment score (can be refined to track stage completion)

        // Mark stage as completed
        if (!completedStages.includes(currentStageIndex)) {
            completedStages.push(currentStageIndex);
            localStorage.setItem('completedStages', JSON.stringify(completedStages));
            populateStageSelectionMenu(); // Update menu to show completion
        }

        if (nextButton) nextButton.classList.remove('hidden'); // Show next button
        if (runButton) runButton.disabled = true; // Disable run button after successful completion
        if (hintButton) hintButton.classList.add('hidden'); // Hide hint button
        updateCharacterMood('happy');
        triggerConfetti(); // Trigger confetti effect
        triggerStarBurst(); // Trigger star burst effect
        stopTimer(); // Stop timer on success
    } else {
        playErrorSound(); // Play error sound
        if (consoleOutput) consoleOutput.textContent = `${translateText('outputError')} \n${stage.expectedOutput.trim()}`;
        if (consoleOutput) consoleOutput.classList.add('error', 'shake'); // Add shake effect
        updateCharacterMood('sad');
    }
}

// Function to show hint
function showHint() {
    playClickSound(); // Play click sound for hint
    const stage = stages[currentStageIndex];
    if (consoleOutput) consoleOutput.textContent = `${translateText('hintButton')}: ${stage.hint[currentLanguage]}`;
    if (consoleOutput) consoleOutput.classList.remove('error', 'shake');
    if (consoleOutput) consoleOutput.style.color = 'var(--hint-color)'; // Yellow for hint
    updateCharacterMood('thinking'); // Character thinks when hint is given
}

// Function to move to the next stage or end game
function nextStage() {
    playClickSound(); // Play click sound for next stage
    currentStageIndex++;
    if (currentStageIndex < stages.length) {
        selectStage(currentStageIndex); // Call selectStage to trigger countdown for next stage
    } else {
        endGame();
    }
}

// Function to update the progress bar
function updateProgressBar() {
    const totalStages = stages.length;
    const progress = (completedStages.length / totalStages) * 100;
    if (progressBarFill) progressBarFill.style.width = `${progress}%`;
}

// Function to end the game
function endGame() {
    showScreen('endMenu');
    if (document.getElementById('congratulationsTitle')) document.getElementById('congratulationsTitle').textContent = translateText('congratulationsTitle');
    if (endMessageElement) endMessageElement.textContent = translateText('endMessage');
    updateCharacterMood('happy'); // Character is happy at the end
    stopTimer(); // Stop timer at end game
}

// Function to restart the game
function restartGame() {
    playClickSound(); // Play click sound for restart
    completedStages = []; // Clear completed stages on restart
    localStorage.removeItem('completedStages');
    score = 0;
    showScreen('startMenu'); // Go back to start menu
    updateCharacterMood('😊'); // Reset character mood
    stopTimer(); // Stop timer on restart
}

// Confetti effect
function triggerConfetti() {
    if (!confettiContainer) return; // Null check for confetti container
    confettiContainer.classList.remove('hidden');
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        confetti.style.transform = `scale(${Math.random() * 1 + 0.5})`;
        confettiContainer.appendChild(confetti);
    }
    setTimeout(() => {
        if (confettiContainer) confettiContainer.innerHTML = '';
        if (confettiContainer) confettiContainer.classList.add('hidden');
    }, 3000); // Remove confetti after 3 seconds
}

// Star Burst effect
function triggerStarBurst() {
    if (!starBurstContainer) return; // Null check for star burst container
    starBurstContainer.classList.remove('hidden');
    for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 0.2}s`;
        starBurstContainer.appendChild(star);
    }
    setTimeout(() => {
        if (starBurstContainer) starBurstContainer.innerHTML = '';
        if (starBurstContainer) starBurstContainer.classList.add('hidden');
    }, 1000); // Remove stars after 1 second
}

// Character mood update
function updateCharacterMood(mood) {
    if (characterAvatar) { // Add null check here
        characterAvatar.classList.remove('happy', 'sad');
        if (mood === 'happy') {
            characterAvatar.textContent = '🥳';
            characterAvatar.classList.add('happy');
        } else if (mood === 'sad') {
            characterAvatar.textContent = '😔';
            characterAvatar.classList.add('sad');
        } else { // Default neutral or thinking
            characterAvatar.textContent = (mood === 'thinking') ? '🤔' : '😊';
            characterAvatar.classList.remove('happy', 'sad');
        }
    }
}

// Function to handle interactive code examples in "Learn With Us" section
function setupRunExampleButtons() {
    const runExampleButtons = document.querySelectorAll('.run-example-button');
    runExampleButtons.forEach(button => {
        // Ensure event listener is added only once
        if (!button.dataset.listenerAdded) {
            button.addEventListener('click', () => {
                const codeBlock = button.previousElementSibling; // Get the <pre><code> block
                const outputDiv = button.nextElementSibling; // Get the .example-output div
                const expectedOutput = button.dataset.output; // Get expected output from data attribute

                if (codeBlock && outputDiv && expectedOutput) {
                    outputDiv.textContent = ''; // Clear previous output
                    outputDiv.classList.remove('error'); // Remove error class

                    // Simulate execution
                    // For a real scenario, this would involve sending code to a backend compiler
                    // For now, we just show the expected output
                    outputDiv.textContent = expectedOutput;
                    outputDiv.style.color = 'var(--success-color)';
                }
            });
            button.dataset.listenerAdded = 'true'; // Mark as added
        }
    });
}


// Event Listeners
startButton.addEventListener('click', startGameFlow);
settingsButton.addEventListener('click', () => {
    playClickSound();
    previousScreenId = 'startMenu'; // Set origin when opening from main menu
    showScreen('settingsMenu');
    if (toggleSound) toggleSound.checked = soundEnabled; // Sync checkbox with current sound state
    if (musicVolumeSlider && musicSynth) musicVolumeSlider.value = Tone.gainToDb(parseFloat(musicVolumeSlider.value)).toFixed(2);
    if (sfxVolumeSlider && clickSynth) sfxVolumeSlider.value = Tone.dbToGain(clickSynth.volume.value).toFixed(2);
    
    // Sync new timer settings
    if (toggleTimer) toggleTimer.checked = timerEnabled;
    if (timerDurationSlider) timerDurationSlider.value = timerDuration;
    if (timerDurationValueSpan) timerDurationValueSpan.textContent = `${timerDurationSlider.value}${translateText('seconds')}`;
});
learnWithUsButton.addEventListener('click', () => {
    playClickSound();
    previousScreenId = 'learnWithUsMenu'; // Set origin when opening from learn with us menu
    showScreen('learnWithUsMenu');
    // Setup run example buttons when Learn With Us menu is shown
    setTimeout(setupRunExampleButtons, 100); // Small delay to ensure elements are in DOM
});
developerInfoButton.addEventListener('click', () => {
    playClickSound();
    previousScreenId = 'developerInfoMenu'; // Set origin when opening from developer info menu
    showScreen('developerInfoMenu');
});
backToMainMenuFromSettings.addEventListener('click', () => {
    playClickSound();
    // Navigate back to the screen from which settings were opened
    showScreen(previousScreenId);
    // If returning to gameArea, ensure timer is correctly resumed
    if (previousScreenId === 'gameArea') {
        startStageTimer(); // Re-start timer if returning to game area
    }
});
backToMainMenuFromDeveloper.addEventListener('click', () => {
    playClickSound();
    showScreen('startMenu');
});
backToMainMenuFromLearn.addEventListener('click', () => {
    playClickSound();
    showScreen('startMenu');
});
backToMainMenuFromStages.addEventListener('click', () => {
    playClickSound();
    showScreen('startMenu');
});
runButton.addEventListener('click', runCode);
hintButton.addEventListener('click', showHint);
nextButton.addEventListener('click', nextStage);
returnToStagesButton.addEventListener('click', () => {
    playClickSound();
    showScreen('stageSelectionMenu');
    populateStageSelectionMenu();
});
restartButton.addEventListener('click', restartGame);
returnToStagesFromEndButton.addEventListener('click', () => {
    playClickSound();
    showScreen('stageSelectionMenu');
    populateStageSelectionMenu();
});

// New: Event listener for settings button in game area
if (settingsFromGameButton) {
    settingsFromGameButton.addEventListener('click', () => {
        playClickSound();
        previousScreenId = 'gameArea'; // Set origin when opening from game area
        showScreen('settingsMenu');
        // Sync settings UI with current state
        if (toggleSound) toggleSound.checked = soundEnabled;
        if (musicVolumeSlider && musicSynth) musicVolumeSlider.value = Tone.dbToGain(musicSynth.volume.value).toFixed(2);
        if (sfxVolumeSlider && clickSynth) sfxVolumeSlider.value = Tone.dbToGain(clickSynth.volume.value).toFixed(2);
        if (toggleTimer) toggleTimer.checked = timerEnabled;
        if (timerDurationSlider) timerDurationSlider.value = timerDuration;
        if (timerDurationValueSpan) timerDurationValueSpan.textContent = `${timerDurationSlider.value}${translateText('seconds')}`;
    });
}

// Settings: Toggle Sound
if (toggleSound) { // Null check for toggleSound
    toggleSound.addEventListener('change', (event) => {
        soundEnabled = event.target.checked;
        localStorage.setItem('soundEnabled', soundEnabled); // Save sound preference
        if (musicSynth) {
            musicSynth.volume.value = soundEnabled ? Tone.gainToDb(parseFloat(musicVolumeSlider.value)) : -Infinity;
        }
        // SFX volume is handled by individual play functions, they check soundEnabled
    });
}

// Settings: Music Volume Control
if (musicVolumeSlider) {
    musicVolumeSlider.addEventListener('input', (event) => {
        const volume = parseFloat(event.target.value);
        if (musicSynth) {
            musicSynth.volume.value = Tone.gainToDb(volume);
        }
        localStorage.setItem('musicVolume', volume);
        if (volume === 0) { // If music volume is 0, ensure sound is off
            soundEnabled = false;
            if (toggleSound) toggleSound.checked = false;
            localStorage.setItem('soundEnabled', false);
        } else if (toggleSound && !toggleSound.checked) { // If volume > 0 and toggle is off, turn it on
            soundEnabled = true;
            toggleSound.checked = true;
            localStorage.setItem('soundEnabled', true);
        }
    });
}

// Settings: SFX Volume Control
if (sfxVolumeSlider) {
    sfxVolumeSlider.addEventListener('input', (event) => {
        const volume = parseFloat(event.target.value);
        if (clickSynth) clickSynth.volume.value = Tone.gainToDb(volume);
        if (successSynth) successSynth.volume.value = Tone.gainToDb(volume);
        if (errorSynth) errorSynth.volume.value = Tone.gainToDb(volume);
        if (countdownSynth) countdownSynth.volume.value = Tone.gainToDb(volume); // Update new synth volume
        if (goSynth) goSynth.volume.value = Tone.gainToDb(volume); // Update new synth volume
        if (timerWarningSynth) timerWarningSynth.volume.value = Tone.gainToDb(volume); // Update new synth volume
        localStorage.setItem('sfxVolume', volume);
        if (volume === 0) { // If SFX volume is 0, ensure sound is off
            soundEnabled = false;
            if (toggleSound) toggleSound.checked = false;
            localStorage.setItem('soundEnabled', false);
        } else if (toggleSound && !toggleSound.checked) { // If volume > 0 and toggle is off, turn it on
            soundEnabled = true;
            toggleSound.checked = true;
            localStorage.setItem('soundEnabled', true);
        }
    });
}

// New: Settings: Toggle Timer
if (toggleTimer) {
    toggleTimer.addEventListener('change', (event) => {
        timerEnabled = event.target.checked;
        localStorage.setItem('timerEnabled', timerEnabled);
    });
}

// New: Settings: Timer Duration Control
if (timerDurationSlider) {
    timerDurationSlider.addEventListener('input', (event) => {
        timerDuration = parseInt(event.target.value);
        localStorage.setItem('timerDuration', timerDuration);
        if (timerDurationValueSpan) timerDurationValueSpan.textContent = `${timerDuration}${translateText('seconds')}`;
    });
}


// Language Selection
if (languageSelect) { // Null check for languageSelect
    languageSelect.addEventListener('change', (event) => {
        currentLanguage = event.target.value;
        localStorage.setItem('gameLanguage', currentLanguage); // Save language preference
        updateUI(); // Update all UI text
    });
}

// Disable Copy/Paste in code editor
if (codeEditor) {
    codeEditor.addEventListener('copy', (e) => e.preventDefault());
    codeEditor.addEventListener('cut', (e) => e.preventDefault());
    codeEditor.addEventListener('paste', (e) => e.preventDefault());
}


// Initial setup on window load
window.onload = () => {
    initAudio(); // Initialize audio context
    // Load sound preference from localStorage
    const savedSoundEnabled = localStorage.getItem('soundEnabled');
    if (savedSoundEnabled !== null) {
        soundEnabled = JSON.parse(savedSoundEnabled);
    }
    if (toggleSound) toggleSound.checked = soundEnabled; // Set checkbox state

    // Load language preference from localStorage and update UI
    const savedLanguage = localStorage.getItem('gameLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    if (languageSelect) languageSelect.value = currentLanguage; // Set dropdown to current language

    // Apply saved volumes
    const savedMusicVolume = localStorage.getItem('musicVolume');
    if (musicVolumeSlider && musicSynth && savedMusicVolume !== null) {
        musicVolumeSlider.value = savedMusicVolume;
        musicSynth.volume.value = Tone.gainToDb(parseFloat(savedMusicVolume));
    } else if (musicVolumeSlider && musicSynth) { // Set default if not found
        musicVolumeSlider.value = 0.5;
        musicSynth.volume.value = Tone.gainToDb(0.5);
    }

    const savedSfxVolume = localStorage.getItem('sfxVolume');
    if (sfxVolumeSlider && clickSynth && savedSfxVolume !== null) {
        sfxVolumeSlider.value = savedSfxVolume;
        const sfxVolDb = Tone.gainToDb(parseFloat(savedSfxVolume));
        clickSynth.volume.value = sfxVolDb;
        successSynth.volume.value = sfxVolDb;
        errorSynth.volume.value = sfxVolDb;
        if (countdownSynth) countdownSynth.volume.value = sfxVolDb; // Update new synth volume
        if (goSynth) goSynth.volume.value = sfxVolDb; // Update new synth volume
        if (timerWarningSynth) timerWarningSynth.volume.value = sfxVolDb; // Update new synth volume
    } else if (sfxVolumeSlider && clickSynth) { // Set default if not found
        sfxVolumeSlider.value = 0.7;
        const sfxVolDb = Tone.gainToDb(0.7);
        clickSynth.volume.value = sfxVolDb;
        successSynth.volume.value = sfxVolDb;
        errorSynth.volume.value = sfxVolDb;
        if (countdownSynth) countdownSynth.volume.value = sfxVolDb; // Update new synth volume
        if (goSynth) goSynth.volume.value = sfxVolDb; // Update new synth volume
        if (timerWarningSynth) timerWarningSynth.volume.value = sfxVolDb; // Update new synth volume
    }

    // Mute/unmute based on soundEnabled
    if (musicSynth) {
        musicSynth.volume.value = soundEnabled ? Tone.gainToDb(parseFloat(musicVolumeSlider.value)) : -Infinity;
    }

    // Load timer settings
    const savedTimerEnabled = localStorage.getItem('timerEnabled');
    if (savedTimerEnabled !== null) {
        timerEnabled = JSON.parse(savedTimerEnabled);
    }
    if (toggleTimer) toggleTimer.checked = timerEnabled;

    const savedTimerDuration = localStorage.getItem('timerDuration');
    if (savedTimerDuration !== null) {
        timerDuration = parseInt(savedTimerDuration);
    }
    if (timerDurationSlider) timerDurationSlider.value = timerDuration;
    if (timerDurationValueSpan) timerDurationValueSpan.textContent = `${timerDuration}${translateText('seconds')}`;


    updateUI(); // Initial UI update based on loaded language
    showScreen('startMenu');
    completedStages = JSON.parse(localStorage.getItem('completedStages') || '[]');
    updateProgressBar();
};
