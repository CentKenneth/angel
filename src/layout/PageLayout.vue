<template>
    <div class="min-h-full">
        <div class="bg-headerBackground pb-32">
            <Disclosure as="nav" class="bg-headerBackground" v-slot="{ open }">
                <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="border-b border-headerBorder">
                        <div class="flex h-16 items-center justify-between px-4 sm:px-0">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="h-8 w-8"
                                        src="/logo1.png"
                                        alt="Your Company" />
                                </div>
                                <span class="ml-2 text-white text-lg font-bold"></span>
                            </div>
                            <div class="ml-auto hidden md:block">
                                <div class="flex items-baseline space-x-4">
                                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                                        :class="[item.current ? 'bg-headerButtonBackground text-headerButtonText' : 'text-headerButtonText hover:bg-headerButtonBackgroundHover hover:text-headerButtonText', 'rounded-md px-3 py-2 text-sm font-medium']"
                                        :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                                </div>
                            </div>
                            <div class="-mr-2 flex md:hidden">
                                <!-- Mobile menu button -->
                                <DisclosureButton
                                    class="relative inline-flex items-center justify-center rounded-md bg-menuBackground p-2 text-menuText hover:bg-menuBackgroundHover hover:text-menuTextHover focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span class="absolute -inset-0.5" />
                                    <span class="sr-only">Open main menu</span>
                                    <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                                    <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>
                </div>

                <DisclosurePanel class="border-b border-headerBorder md:hidden">
                    <div class="space-y-1 px-2 py-3 sm:px-3">
                        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                            :class="[item.current ? 'bg-headerButtonBackground text-headerButtonText' : 'text-gray-300 hover:bg-headerButtonBackgroundHover hover:text-headerButtonTextHover', 'block rounded-md px-3 py-2 text-base font-medium']"
                            :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
                    </div>
                    <!-- <div class="border-t border-headerBorder pb-3 pt-4">
                        <div class="flex items-center px-5">
                            <div class="flex-shrink-0">
                                <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
                            </div>
                            <div class="ml-3">
                                <div class="text-base font-medium leading-none text-white">{{ user.name }}</div>
                                <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
                            </div>
                            <button type="button"
                                class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="absolute -inset-1.5" />
                                <span class="sr-only">View notifications</span>
                                <BellIcon class="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="mt-3 space-y-1 px-2">
                            <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href"
                                class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                                {{ item.name }}</DisclosureButton>
                        </div>
                    </div> -->
                </DisclosurePanel>
            </Disclosure>
            <header class="py-10">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold tracking-tight text-white">{{ $route.name }}</h1>
                </div>
            </header>
        </div>

        <main class="-mt-32 text-contentText">
            <div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Tools', href: '#', current: false },
    { name: 'Skills', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'About', href: '#', current: false },
]
</script>
