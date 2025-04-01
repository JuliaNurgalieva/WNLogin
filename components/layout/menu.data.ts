export interface IMenuItem {

    name: string;
    url: string;
    icon: string;
}
export const MENU_DATA: IMenuItem[] = [
    {
        icon: 'radix-icons:dashboard',
        name: "Projects",
        url: "",
    },
    {
		name: 'Products',
		icon: 'ep:goods',
		url: '/',
	},
	{
		name: 'Payments',
		icon: 'ph:contactless-payment',
		url: '/',
	},
	{
		name: 'Orders',
		icon: 'fluent:channel-48-regular',
		url: '/',
	},
	{
		name: 'Customers',
		icon: 'mingcute:group-line',
		url: '/',
	},
	{
		name: 'Feedback',
		icon: 'fluent:person-mail-48-regular',
		url: '/',
	},
	{
		name: 'Settings',
		icon: 'radix-icons:gear',
		url: '/',
	},
	{
		name: 'Help center',
		icon: 'radix-icons:question-mark',
		url: '/',
	},
]