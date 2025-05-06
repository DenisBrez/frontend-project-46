# Вычислитель отличий
![CI](https://github.com/DenisBrez/frontend-project-46/actions/workflows/main.yml/badge.svg)
[![Actions Status](https://github.com/DenisBrez/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/DenisBrez/frontend-project-46/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=DenisBrez_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=DenisBrez_frontend-project-46)
[![Maintainability](https://api.codeclimate.com/v1/badges/5f3c29e33935600eb665/maintainability)](https://codeclimate.com/github/DenisBrez/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5f3c29e33935600eb665/test_coverage)](https://codeclimate.com/github/DenisBrez/frontend-project-46/test_coverage)

##  Обзор

Вычислитель отличий сравнивает два файла в формате **JSON** или **YAML** и выводит различия в одном из трёх форматов:  
- `stylish` — по умолчанию  
- `plain`  
- `json`

##  Установка

```bash
git clone https://github.com/DenisBrez/frontend-project-46
cd frontend-project-46
make install
npm link 
```

##  применение
 ```bash
gendiff -h                        # Показать справку
gendiff -V                        # Показать версию
gendiff file1 file2              # Сравнение двух файлов (формат по умолчанию: stylish)
gendiff --format plain file1 file2  # Сравнение в формате plain
gendiff --format json file1 file2   # Сравнение в формате json
```
