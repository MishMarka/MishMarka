# MishMarka - AI Manga Generator

MishMarka is an innovative application that leverages artificial intelligence to generate manga. It supports multilingual capabilities and integrates with Supabase for data management and Hugging Face for advanced AI models.

## Features

- **AI-Generated Manga Structure**: Automatically generates manga chapters, pages, and panels using AI models.
- **Multilingual Support**: Offers translations in Spanish, English, Japanese, and Chinese to cater to a global audience.
- **Integration with Supabase**: Utilizes Supabase for user authentication, data storage, and retrieval of manga data.
- **Hugging Face Models**: Interacts with Hugging Face models for text and image generation, enhancing the creative process.

## Project Structure

```
MishMarka
├── src
│   ├── app.ts
│   ├── config
│   │   └── index.ts
│   ├── controllers
│   │   └── mangaController.ts
│   ├── integrations
│   │   ├── supabase.ts
│   │   └── huggingface.ts
│   ├── i18n
│   │   └── index.ts
│   ├── models
│   │   └── mangaModel.ts
│   ├── routes
│   │   └── mangaRoutes.ts
│   ├── services
│   │   ├── aiMangaGenerator.ts
│   │   └── multilingualService.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/MishMarka.git
   cd MishMarka
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your Supabase and Hugging Face API keys.

4. **Run the Application**:
   ```bash
   npm start
   ```

## Usage Guidelines

- Access the API endpoints defined in `src/routes/mangaRoutes.ts` to interact with the manga generation features.
- Use the multilingual service to translate text and manage language preferences.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.