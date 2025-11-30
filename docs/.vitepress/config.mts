import {defineConfig} from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "ru-RU",
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    title: "Sillerstone",
    description: "База знаний проекта Sillerstone",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/logo.png",

        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: 'Поиск',
                                buttonAriaLabel: 'Поиск'
                            },
                            modal: {
                                displayDetails: 'Показать подробности',
                                resetButtonTitle: 'Сбросить поиск',
                                backButtonTitle: 'Закрыть поиск',
                                noResultsText: 'Нет результатов для',
                                footer: {
                                    selectText: 'для выбора',
                                    selectKeyAriaLabel: 'Enter',
                                    navigateText: 'для навигации',
                                    navigateUpKeyAriaLabel: 'Вверх',
                                    navigateDownKeyAriaLabel: 'Вниз',
                                    closeText: 'для закрытия',
                                    closeKeyAriaLabel: 'esc'
                                }
                            }
                        }
                    }
                }
            }
        },

        nav: [
            {text: "Главная", link: "/"},
            {text: "Правила", link: "/rules/info"}
        ],

        sidebar: [
            {
                text: "Правила",
                link: "/rules/info",
                items: [
                    {text: "Правила общения", link: "/rules/chatting"},
                    {
                        text: "Правила игры", link: "/rules/game",
                        items: [
                            {text: "Разметка чата", link: "/rules/chat-formatting"}
                        ]
                    },
                    {text: "Правила персонала", link: "/rules/staff"}
                ]
            },
            {
                text: "",
                items: [
                    {text: "Лор", link: "/lore"},
                    {text: "О карте", link: "/about-map"}
                ]
            },
            {
                text: "Донат",
                link: "/donate/info",
                items: [
                    {text: "Подписка Stelee", link: "/donate/stelee-sub"},
                    {text: "Пользовательская роль", link: "/donate/custom-role"},
                    {text: "Sawn-Off", link: "/donate/sawn-off"},
                    {text: "Ключ от кейса с головными уборами", link: "/donate/hats-key"},
                    {text: "Ключ от кейса со скинами", link: "/donate/skins-key"},
                    {text: "Кастомный номер ТС", link: "/donate/custom-number"},
                ]
            },
            {
                text: "Персоналу",
                items: [
                    {text: "", link: "/staff/"}
                ]
            }
        ],

        socialLinks: [
            {icon: "discord", link: "https://discord.com/invite/7qg8VrFEvH"},
            {icon: "telegram", link: "https://t.me/sillerstone"},
            {icon: "youtube", link: "https://www.youtube.com/@sillerstone"}
        ],

        docFooter: {
            prev: "Предыдущая страница",
            next: "Следующая страница"
        },

        darkModeSwitchLabel: "Внешний вид",
        lightModeSwitchTitle: "Переключиться на светлую тему",
        darkModeSwitchTitle: "Переключиться на тёмную тему",
        sidebarMenuLabel: "Меню",
        returnToTopLabel: "Вернуться наверх",
        langMenuLabel: "Изменить язык",
        skipToContentLabel: "Перейти к содержанию",
        outline: {
            label: "На этой странице"
        },

        externalLinkIcon: true
    },

    markdown: {
        image: {
            lazyLoading: true
        },
        container: {
            tipLabel: "Совет",
            warningLabel: "Предупреждение",
            dangerLabel: "Опасно",
            infoLabel: "Информация",
            detailsLabel: "Подробности"
        }
    }
})
