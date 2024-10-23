![Logo of the project](assets/imags/talenty.png)<b>front

## Стек

- [next.js](https://nextjs.org/)
- [node v18.17](https://nodejs.org/en/blog/announcements/v18-release-announce)
- [material-ui](https://mui.com/)
- [scss](https://sass-lang.com/)
- [swr](https://swr.vercel.app/ru)

## Установка зависимостей

> FYI: перед запуском проверьте, что у вас установлен node v18.17.0, если же нет можете установить [nvm](https://github.com/nvm-sh/nvm),
> также если информации в документации по установке недостаточно,
> данный [гайд](https://habr.com/ru/companies/timeweb/articles/541452/) может быть полезен

```shell
$ npm install
```

### Начальная настройка

Также необходимо создать файл .env.local:

```
# адрес локально поднятого бэка
NEXT_PUBLIC_API_BASE_URL = 'http://0.0.0.0:3000'
```

## Запуск проекта

Когда бэк развернут на `localhost:3000`, запускаем фронт командой

```shell
$ npm run dev
```

### Сборка

```shell
$ npm run build
```
