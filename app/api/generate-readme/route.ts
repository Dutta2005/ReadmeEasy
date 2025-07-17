import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { title, description, usage, author, technologies, contact } = await req.json();

    const prompt = `
You are a professional technical writer and open-source README.md expert.

🎯 Your task is to generate a clean, polished, and fully formatted \`README.md\` file using the provided project details.

---

### 🧠 Behavior Guidelines:

1. If a **title** is provided, use it as the main heading with \`#\` and add an emoji that best represents the project.  
   - If **no title is provided**, use \`# 🚀 Project Title\`.
2. Directly under the title, write a clear and engaging **description** of the project (maximum 500 characters).
   - If a description is missing, infer and generate one from context.
   - If a description is provided, enhance and rewrite it professionally.
3. Use \`##\` headers for all sections with a **relevant emoji before each section title**.
4. If any field is missing, generate realistic and professional placeholder content.
5. In the **Features** and **Upcoming Features** sections:
   - Use \`-\` bullets with relevant emojis for each feature
   - No extra indentation or spacing

6. For the **Tech Stack**, group by categories using bold headers:
   \`**Frontend:** Next.js, Tailwind CSS\`  
   \`**Backend:** Node.js, Express\`  
   \`**Database:** Supabase, PostgreSQL\`  

7. The **Installation** section must include numbered steps:
   - Each step must use its own \`\`\`bash\`\`\` code block

8. Also include a subsection titled \`🔐 Environment Variables\`:
   - Automatically detect if the project requires a \`.env\` file based on tech stack (e.g., Supabase, Auth, API, DB)
   - If required, generate a realistic example:
     \`\`\`env
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     \`\`\`

9. The **Screenshots** section must include only a placeholder like:
   \`_Add screenshots here_\`

10. The **Usage / How it Works** section:
   - If \`usage\` is provided, format and polish the steps
   - If not provided, create a basic outline of how to use the app

11. Include a sample **Folder Structure**:
   \`\`\`bash
   .
   ├── components
   ├── pages
   ├── public
   ├── styles
   └── README.md
   \`\`\`

12. The **Contributions** section should contain a professional, clear open-source guide:
    \`\`\`md
    We welcome all contributions! Follow these steps to contribute:

    1. 🍴 Fork this repository
    2. 📥 Clone your fork using \`git clone\`
    3. 📂 Create a new branch (\`git checkout -b feature/your-feature-name\`)
    4. 🛠 Make your changes
    5. ✅ Commit and push (\`git commit -m "Add feature"\`)
    6. 🔁 Open a Pull Request with a clear description

    All contributions must follow our [Code of Conduct](#) and [Contribution Guidelines](#).
    \`\`\`

13. End with the **License** section (default to MIT unless specified)

14. In the **Contact** section, show the author and email on separate lines.

15. At the bottom of the file, include this signature:
> ❤️ This README was written by **ReadmeEasy** for fast and professional documentation.

---

### 📦 Sections to include (in order, with emojis):

- Project Title (with emoji) and Description
- 🚀 Live Demo
- 🧪 Features
- 🛠 Tech Stack
- 📦 Installation
  - 🔐 Environment Variables
- 🖼️ Screenshots
- ⚙️ Usage / How it Works
- 🗂️ Folder Structure
- 🤝 Contributions
- 🚧 Upcoming Features
- 📄 License
- 📬 Contact (Author name and email)

---

🧾 Here is the project data input format:

Project Title: ${title}  
Description: ${description}  
Usage Steps: ${usage}  
Features: \${features}  
Upcoming Features: \${upcoming}  
Technologies Used: ${technologies}  
Author: ${author}  
Contact: ${contact}  
Live Demo: \${demo}

📌 Return **only** the final \`README.md\` content. Do **not** include any explanation, commentary, or markdown code block fences.
`;



    const response = await openai.chat.completions.create({
      model: 'gpt-4.1',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates professional README.md files for software projects.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 2000,
      temperature: 0.7,
    });

    const readme = response.choices[0].message.content;
    return NextResponse.json({ readme });
  } catch (error) {
    console.error('Error generating README:', error);
    return NextResponse.json({ message: 'Error generating README' }, { status: 500 });
  }
}
