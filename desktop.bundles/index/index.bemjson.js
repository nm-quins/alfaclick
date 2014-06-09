({
    block: 'page',
    title: 'Альфа-Клик',
    head: [{ elem: 'meta', attrs: { name: 'description', content: '' }}],
    styles: [{ elem: 'css', url: 'assets/application.min.css', ie: false }],
    content:[
		{
			block: 'l-outer',
			tag: 'div',
			content: [
		        {
		            block: 'l-header',
		            tag: 'header',
		            content: [
		                {
		                    block: 'b-logo',
		                    tag: 'h1',
		                    content: {
								elem: 'link',
								tag: 'a',
								attrs: { href: '#' },
								content: 'Интернет-банк Альфа-Клик'
							}
		                },
						{
							block: 'b-general-contacts',
							tag: 'dl',
							content: [
								{
									elem: 'title',
									tag: 'dt',
									content: 'Телефоны cлужбы поддержки'
								},
								{
									elem: 'clause',
									tag: 'dd',
									content: [
										{
											elem: 'number',
											tag: 'strong',
											content: '8 495 78-888-78'
										},
										{
											elem: 'description',
											tag: 'span',
											content: 'для Москвы'
										}
									]
								},
								{
									elem: 'clause',
									tag: 'dd',
									content: [
										{
											elem: 'number',
											tag: 'strong',
											content: '8 800 100-77-33'
										},
										{
											elem: 'description',
											tag: 'span',
											content: 'для бесплатных звонков по России'
										}
									]
								}
							]
						},
						{
							block: 'b-assistance-menu',
							tag: 'dl',
							content: [
								{
									elem: 'title',
									tag: 'dt',
									content: 'Помощь'
								},
								{
									elem: 'clause',
									tag: 'dd',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Написать в поддержку'
										}
									]
								},
								{
									elem: 'clause',
									tag: 'dd',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Справка по Альфа-Банку'
										}
									]
								}
							]
						}
		            ]
		        },
		        {
		            block: 'l-content',
		            tag: 'div',
		            content: [
		                {
							elem: 'section',
		                    tag: 'section',
							content: '1 section'
		                },
		                {
							elem: 'section',
		                    tag: 'section',
							content: [
								{
									block: 'b-registration-form',
									tag: 'form',
									content: [
										{
											elem: 'title',
											tag: 'h2',
											content: 'Регистрация'
										},
										{
											elem: 'description',
											tag: 'p',
											content: 'Чтобы начать бесплатно пользоваться интернет-банком «Альфа-Клик» вам достаточно просто пройти онлайн-регистрацию'
										},
										{
											block: 'b-tabs',
											tag: 'ul',
											content: [
												{
													elem: 'clause',
													tag: 'li',
													mods: { state: 'current' },
													content: 'Данные клиента'
												},
												{
													elem: 'clause',
													tag: 'li',
													content: 'СМС-подтверждение'
												},
												{
													elem: 'clause',
													tag: 'li',
													content: 'Логин и пароль'
												}
											]
										},
										{
											elem: 'tab__contents',
											mods: { position: 'first' },
											content: [
												{
													elem: 'section',
													tag: 'section',
													mods: { position: 'first' },
													content: [
														{
															elem: 'section__title',
															tag: 'h3',
															mods: { position: 'first' },
															content: 'Введите данные любой из ваших карт Альфа-Банка:'
														},
														{
															block: 'b-credit-card',
															content: [
																{
																	elem: 'logo',
																	tag: 'span',
																	content: 'Альфа-Банк'
																},
																{
																	elem: 'label',
																	tag: 'span',
																	content: 'Номер карты'
																},
																{
																	block: 'b-text-field',
																	tag: 'input',
																	attrs: { type: 'text' },
																	mods: { color: 'red' }
																},
																{
																	block: 'b-text-field',
																	tag: 'input',
																	attrs: { type: 'text' },
																	mods: { color: 'red' }
																},
																{
																	block: 'b-text-field',
																	tag: 'input',
																	attrs: { type: 'text' },
																	mods: { color: 'red' }
																},
																{
																	block: 'b-text-field',
																	tag: 'input',
																	attrs: { type: 'text' },
																	mods: { color: 'red' }
																},
																{
																	elem: 'shadow',
																	tag: 'span',
																	mods: { position: 'top' },
																	content: ''
																},
																{
																	elem: 'shadow',
																	tag: 'span',
																	mods: { position: 'bottom' },
																	content: ''
																}
															]
														}
													]
												},
												{
													elem: 'section',
													tag: 'section',
													mods: { position: 'second' },
													content: [
														{
															elem: 'section__title',
															tag: 'h3',
															mods: { position: 'second' },
															content: 'Укажите последние 4 цифры вашего мобильного телефона:'
														},
														{
															block: 'b-text-field',
															tag: 'input'
														}
													]
												},
												{
													elem: 'section',
													tag: 'section',
													mods: { position: 'third' },
													content: [
														{
															elem: 'section__title',
															tag: 'h3',
															mods: { position: 'third' },
															content: 'Чтобы мы могли убедиться, что вы не робот, отметьте картинку с&nbsp;синим автомобилем:'
														}
													]
												}
											]
										}
									]
								}
							]
		                },
		                {
							elem: 'section',
		                    tag: 'section',
							content: [
								{
									block: 'b-news-previews',
									content: [
										{
											elem: 'title',
											tag: 'h2',
											content: 'Новости'
										},
										{
											block: 'b-news-article',
											tag: 'article',
											content: [
												{
													elem: 'date',
													tag: 'span',
													content: '16.04.2014'
												},
												{
													elem: 'title',
													tag: 'h3',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: "#" },
															content: 'Альфа-Банк представляет «Активити» — накопительный счёт для активных людей'
														}
													]
												}
											]
										},
										{
											block: 'b-news-article',
											tag: 'article',
											content: [
												{
													elem: 'date',
													tag: 'span',
													content: '16.04.2014'
												},
												{
													elem: 'title',
													tag: 'h3',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: "#" },
															content: 'Альфа-Банк и Сотмаркет: 10% скидка на покупки и возможность стать обладателем стильного смартфона'
														}
													]
												}
											]
										},
										{
											block: 'b-news-article',
											tag: 'article',
											content: [
												{
													elem: 'date',
													tag: 'span',
													content: '16.04.2014'
												},
												{
													elem: 'title',
													tag: 'h3',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: "#" },
															content: 'Альфа-Банк дополнил систему интернет-банкинга новым сервисом «Мои Расходы»'
														}
													]
												}
											]
										},
										{
											block: 'b-news-article',
											tag: 'article',
											content: [
												{
													elem: 'date',
													tag: 'span',
													content: '16.04.2014'
												},
												{
													elem: 'title',
													tag: 'h3',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: "#" },
															content: 'Альфа-Банк и «Лаборатория Касперского» дарят год обучения английскому языку'
														}
													]
												}
											]
										}
									]
								}
							]
		                },
		                {
							elem: 'section',
		                    tag: 'section',
							content: [
								{
									block: 'b-advantages',
									tag: 'dl',
									content: [
										{
											elem: 'title',
											tag: 'dt',
											content: 'Возможности'
										},
										{
											elem: 'clause',
											tag: 'dd',
											content: [
												{
													elem: 'link',
													tag: 'a',
													attrs: { href: '#' },
													content: 'Что можно оплатить?'
												}
											]
										},
										{
											elem: 'clause',
											tag: 'dd',
											content: [
												{
													elem: 'link',
													tag: 'a',
													attrs: { href: '#' },
													content: 'Мультимедийная презентация'
												}
											]
										},
										{
											elem: 'clause',
											tag: 'dd',
											content: [
												{
													elem: 'link',
													tag: 'a',
													attrs: { href: '#' },
													content: 'Часто задаваемые вопросы'
												}
											]
										},
										{
											elem: 'clause',
											tag: 'dd',
											content: [
												{
													elem: 'link',
													tag: 'a',
													attrs: { href: '#' },
													content: 'Помощь'
												}
											]
										}
									]
								},
								{
									block: 'b-advantages',
									tag: 'dl',
									content: [
										{
											elem: 'title',
											tag: 'dt',
											content: 'Безопасность'
										},
										{
											elem: 'clause',
											tag: 'dd',
											content: [
												{
													elem: 'link',
													tag: 'a',
													attrs: { href: '#' },
													content: 'Советы по безопасности'
												}
											]
										},
										{
											elem: 'clause',
											tag: 'dd',
											content: [
												{
													elem: 'link',
													tag: 'a',
													attrs: { href: '#' },
													content: 'Используемые технологии'
												}
											]
										},
										{
											elem: 'clause',
											tag: 'dd',
											content: [
												{
													elem: 'link',
													tag: 'a',
													attrs: { href: '#' },
													content: 'Защита данных'
												}
											]
										}
									]
								},
								{
									block: 'b-applications',
									content: [
										{
											elem: 'title',
											tag: 'h2',
											content: 'Мобильные приложения'
										},
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Альфа-Мобайл'
										},
										{
											elem: 'description',
											tag: 'p',
											content: 'Простой и&nbsp;удобный банк в&nbsp;вашем телефоне всегда под рукой.'
										},
										{
											elem: 'collection',
											tag: 'ul',
											content: [
												{
													elem: 'collection__clause',
													tag: 'li',
													mods: { system: 'ios' },
													content: {
														elem: 'collection__link',
														tag: 'a',
														attrs: { href: '#' },
														content: 'iOS'
													}
												},
												{
													elem: 'collection__clause',
													tag: 'li',
													mods: { system: 'windows' },
													content: {
														elem: 'collection__link',
														tag: 'a',
														attrs: { href: '#' },
														content: 'Windows Phone'
													}
												},
												{
													elem: 'collection__clause',
													tag: 'li',
													mods: { system: 'android' },
													content: {
														elem: 'collection__link',
														tag: 'a',
														attrs: { href: '#' },
														content: 'Android'
													}
												},
												{
													elem: 'collection__clause',
													tag: 'li',
													mods: { system: 'other' },
													content: {
														elem: 'collection__link',
														tag: 'a',
														attrs: { href: '#' },
														content: 'Другие системы'
													}
												}
											]
										}
									]
								}
							]
		                },
		                {
							elem: 'section',
		                    tag: 'section',
							content: [
								{
									block: 'b-promos-previews',
									content: [
										{
											block: 'b-promos-article',
											tag: 'article',
											content: [
												{
													elem: 'inside',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'section',
																	tag: 'section',
																	mods: { position: 'front' },
																	content: [
																		{
																			elem: 'picture',
																			tag: 'img',
																			attrs: { src: 'http://www.plusworld.ru/upload/medialibrary/4b2/4b2d08ba84df22a0f6a9dac83a317721.jpg' }
																		},
																		{
																			elem: 'title',
																			tag: 'h3',
																			content: 'Получить выгодную кредитную карту'
																		}
																	]
																},
																{
																	elem: 'section',
																	tag: 'section',
																	mods: { position: 'back' },
																	content: [
																		{
																			elem: 'description__title',
																			tag: 'h3',
																			content: 'Получить выгодную кредитную карту'
																		},
																		{
																			elem: 'description',
																			tag: 'p',
																			content: 'Для успешного управления предприятием крайне важен четко организованный процесс контроля расходов. Но&nbsp;многие предприятия, даже внедрившие корпоративную информационную систему.'
																		},
																		{
																			elem: 'description__link',
																			tag: 'span',
																			content: 'Перейти'
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											block: 'b-promos-article',
											tag: 'article',
											content: [
												{
													elem: 'inside',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'section',
																	tag: 'section',
																	mods: { position: 'front' },
																	content: [
																		{
																			elem: 'picture',
																			tag: 'img',
																			attrs: { src: 'http://static.ngs.ru/news/preview/28278c29dde0a8259fe1590904043f2f0ebc620c_750.jpg' }
																		},
																		{
																			elem: 'title',
																			tag: 'h3',
																			content: 'Использовать мобильные приложения'
																		}
																	]
																},
																{
																	elem: 'section',
																	tag: 'section',
																	mods: { position: 'back' },
																	content: [
																		{
																			elem: 'description__title',
																			tag: 'h3',
																			content: 'Использовать мобильные приложения'
																		},
																		{
																			elem: 'description',
																			tag: 'p',
																			content: 'Для успешного управления предприятием крайне важен четко организованный процесс контроля расходов. Но&nbsp;многие предприятия, даже внедрившие корпоративную информационную систему.'
																		},
																		{
																			elem: 'description__link',
																			tag: 'span',
																			content: 'Перейти'
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											block: 'b-promos-article',
											tag: 'article',
											content: {
												elem: 'inside',
												content: {
													elem: 'link',
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															elem: 'section',
															tag: 'section',
															mods: { position: 'front' },
															content: [
																{
																	elem: 'picture',
																	tag: 'img',
																	attrs: { src: 'http://s.newslab.ru/photoalbum/4713/54357.jpg' }
																},
																{
																	elem: 'title',
																	tag: 'h3',
																	content: 'Получить выгодную кредитную карту'
																}
															]
														},
														{
															elem: 'section',
															tag: 'section',
															mods: { position: 'back' },
															content: [
																{
																	elem: 'description__title',
																	tag: 'h3',
																	content: 'Получить выгодную кредитную карту'
																},
																{
																	elem: 'description',
																	tag: 'p',
																	content: 'Для успешного управления предприятием крайне важен четко организованный процесс контроля расходов. Но&nbsp;многие предприятия, даже внедрившие корпоративную информационную систему.'
																},
																{
																	elem: 'description__link',
																	tag: 'span',
																	content: 'Перейти'
																}
															]
														}
													]
												}
											}
										},
										{
											block: 'b-promos-article',
											tag: 'article',
											content: [
												{
													elem: 'inside',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'section',
																	tag: 'section',
																	mods: { position: 'front' },
																	content: [
																		{
																			elem: 'picture',
																			tag: 'img',
																			attrs: { src: 'http://business-pro.pro/wp-content/uploads/2014/04/86887.jpg' }
																		},
																		{
																			elem: 'title',
																			tag: 'h3',
																			content: 'Использовать мобильные приложения'
																		}
																	]
																},
																{
																	elem: 'section',
																	tag: 'section',
																	mods: { position: 'back' },
																	content: [
																		{
																			elem: 'description__title',
																			tag: 'h3',
																			content: 'Использовать мобильные приложения'
																		},
																		{
																			elem: 'description',
																			tag: 'p',
																			content: 'Для успешного управления предприятием крайне важен четко организованный процесс контроля расходов. Но&nbsp;многие предприятия, даже внедрившие корпоративную информационную систему.'
																		},
																		{
																			elem: 'description__link',
																			tag: 'span',
																			content: 'Перейти'
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						},
						{
							elem: 'section',
							tag: 'section',
							content: {

								block: 'b-rewards-previews',
								content: [
									{
										block: 'b-rewards-article',
										tag: 'article',
										content: {

											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													elem: 'picture',
													tag: 'span',
													content: {

														elem: 'picture__entity',
														tag: 'img',
														attrs: { src: 'assets/images/test/S5KQ5PsZuc.png' }
													}
												},
												{
													elem: 'title',
													tag: 'span',
													content: '«Альфа-Клик» — лучший интернет-банк в России'
												}
											]
										}
									},
									{
										block: 'b-rewards-article',
										tag: 'article',
										content: {

											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													elem: 'picture',
													tag: 'span',
													content: {

														elem: 'picture__entity',
														tag: 'img',
														attrs: { src: 'assets/images/test/Npk4hvHzyH.png' }
													}
												},
												{
													elem: 'title',
													tag: 'span',
													content: '«Альфа-Клик» — обладатель Премии Рунета'
												}
											]
										}
									},
									{
										block: 'b-rewards-article',
										tag: 'article',
										content: {

											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													elem: 'picture',
													tag: 'span',
													content: {

														elem: 'picture__entity',
														tag: 'img',
														attrs: { src: 'assets/images/test/PeDNz1VP9H.png' }
													}
												},
												{
													elem: 'title',
													tag: 'span',
													content: 'Безопасность подтверждена сертификатами'
												}
											]
										}
									}
								]
							}
						}
					]
		        },
		        {
		            block: 'l-footer',
		            tag: 'footer',
		            content: [
						{
							block: 'b-copyright',
							content: [
								{
									elem: 'paragraph',
									tag: 'p',
									content: '&copy; 2001-2014 Альфа-Банк'
								},
								{
									elem: 'paragraph',
									tag: 'p',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Справка'
										}
									]
								}
							]
						},
						{
							block: 'b-general-contacts',
							tag: 'dl',
							content: [
								{
									elem: 'title',
									tag: 'dt',
									content: 'Служба поддержки'
								},
								{
									elem: 'clause',
									tag: 'dd',
									content: [
										{
											elem: 'number',
											tag: 'strong',
											content: '8 495 78-888-78'
										},
										{
											elem: 'description',
											tag: 'span',
											content: 'для Москвы'
										}
									]
								},
								{
									elem: 'clause',
									tag: 'dd',
									content: [
										{
											elem: 'number',
											tag: 'strong',
											content: '8 800 100-77-33'
										},
										{
											elem: 'description',
											tag: 'span',
											content: 'для бесплатных звонков по России'
										}
									]
								}
							]
						},
						{
							block: 'b-sociality-menu',
							tag: 'dl',
							content: [
								{
									elem: 'title',
									tag: 'dt',
									content: 'Мы в социальных сетях'
								},
								{
									elem: 'clause',
									tag: 'dd',
									mods: { network: 'vk' },
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'ВКонтакте'
										}
									]
								},
								{
									elem: 'clause',
									tag: 'dd',
									mods: { network: 'facebook' },
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Facebook'
										}
									]
								},
								{
									elem: 'clause',
									tag: 'dd',
									mods: { network: 'twitter' },
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Twitter'
										}
									]
								}
							]
						}
		            ]
		        }
			]
		}
    ]/*,
    scripts: [
        { elem: 'js', url: 'assets/plugins.min.js' }
    ]*/
})
