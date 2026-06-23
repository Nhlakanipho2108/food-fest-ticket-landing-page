<script setup>
import { computed, onMounted, ref, watch } from 'vue'

import TicketTierCard from './components/TicketTierCard.vue'
import { ticketTiers } from './data/tickets'

const sortBy = ref('recommended')
const favourites = ref([])
const themeMode = ref('light')

const sortedTiers = computed(() => {
  const tiers = [...ticketTiers]

  if (sortBy.value === 'price-low') {
    return tiers.sort((a, b) => a.price - b.price)
  }

  if (sortBy.value === 'price-high') {
    return tiers.sort((a, b) => b.price - a.price)
  }

  return tiers.sort((a, b) => Number(b.featured) - Number(a.featured))
})

const favouriteCount = computed(() => favourites.value.length)

const featuredTier = computed(() => ticketTiers.find((tier) => tier.featured))

const themeLabel = computed(() => (themeMode.value === 'light' ? 'Switch to Dark' : 'Switch to Light'))

function isFavourited(tierId) {
  return favourites.value.includes(tierId)
}

function toggleFavourite(tierId) {
  if (isFavourited(tierId)) {
    favourites.value = favourites.value.filter((id) => id !== tierId)
    return
  }

  favourites.value = [...favourites.value, tierId]
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', themeMode.value)
}

function toggleTheme() {
  themeMode.value = themeMode.value === 'light' ? 'dark' : 'light'
}

onMounted(() => {
  const savedTheme = localStorage.getItem('food-fest-theme')
  if (savedTheme === 'light' || savedTheme === 'dark') {
    themeMode.value = savedTheme
  } else {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    themeMode.value = systemPrefersDark ? 'dark' : 'light'
  }

  applyTheme()
})

watch(themeMode, (nextTheme) => {
  applyTheme()
  localStorage.setItem('food-fest-theme', nextTheme)
})
</script>

<template>
  <main class="landing">
    <header class="hero">
      <div class="hero-top-bar">
        <p class="event-kicker">Cape Town, South Africa</p>
        <button class="theme-toggle" type="button" @click="toggleTheme">{{ themeLabel }}</button>
      </div>
      <h1>Cape Town Food Fest 2026</h1>
      <p class="hero-copy">
        A weekend of open-fire kitchens, iconic street food, and live sets by local artists. Explore
        ticket tiers and lock in your festival experience.
      </p>

      <div class="hero-meta">
        <p>
          <span class="meta-label">Dates</span>
          <strong>18 to 20 September</strong>
        </p>
        <p>
          <span class="meta-label">Featured Tier</span>
          <strong>{{ featuredTier ? featuredTier.name : 'To Be Announced' }}</strong>
        </p>
        <p>
          <span class="meta-label">Favourites</span>
          <strong>{{ favouriteCount }}</strong>
        </p>
      </div>
    </header>

    <section class="ticket-section" aria-labelledby="tiers-title">
      <div class="ticket-section-header">
        <h2 id="tiers-title">Choose Your Ticket Tier</h2>

        <label class="sort-control" for="tier-sort">
          Sort by
          <select id="tier-sort" v-model="sortBy">
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </label>
      </div>

      <div class="tier-grid">
        <TicketTierCard
          v-for="tier in sortedTiers"
          :key="tier.id"
          :tier="tier"
          :is-favourited="isFavourited(tier.id)"
          @toggle-favourite="toggleFavourite"
        />
      </div>
    </section>
  </main>
</template>
