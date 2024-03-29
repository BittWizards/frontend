#!/bin/sh
# для каждой переменной окружения с префиксом MY_APP_ создаем переменные
for i in $(env | grep MY_APP_)
do
    # Название переменной окружения
    key=$(echo $i | cut -d '=' -f 1)
    # Значение переменной окружения
    value=$(echo $i | cut -d '=' -f 2-)
    echo $key=$value

    # Находим в файлах значения key и меняем их на value
    # Замена только в файлах формата .js и .css
    find /app/dist/ -type f \( -name '*.js' -o -name '*.css' \) -exec sed -i "s|${key}|${value}|g" '{}' +
done

cp -r /app/dist/. /frontend_static/