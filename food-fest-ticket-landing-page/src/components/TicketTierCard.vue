<script setup>
const props = defineProps({
  tier: {
    type: Object,
    required: true,
  },
  isFavourited: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['toggle-favourite'])

function onToggleFavourite() {
  emit('toggle-favourite', props.tier.id)
}
</script>

<template>
  <article :class="['ticket-card', { featured: tier.featured }]" :aria-label="`${tier.name} ticket tier`">
    <p v-if="tier.featured" class="badge">Featured</p>

    <header>
      <h3>{{ tier.name }}</h3>
      <p class="price">R{{ tier.price }}</p>
      <p class="description">{{ tier.description }}</p>
    </header>

    <ul>
      <li v-for="benefit in tier.benefits" :key="benefit">{{ benefit }}</li>
    </ul>

    <footer>
      <button class="favourite-btn" type="button" @click="onToggleFavourite">
        <span>{{ isFavourited ? '★' : '☆' }}</span>
        {{ isFavourited ? 'Favourited' : 'Add to Favourites' }}
      </button>
      <button class="cta-btn" type="button">Notify Me</button>
    </footer>
  </article>
</template>

<style scoped>
.ticket-card {
  position: relative;
  display: grid;
  gap: 1rem;
  border-radius: 1.2rem;
  border: 1px solid var(--color-stroke);
  background: var(--color-card-bg);
  backdrop-filter: blur(3px);
  padding: 1.1rem;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
  animation: card-enter 500ms ease both;
}

.ticket-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 30px rgb(18 38 58 / 14%);
  border-color: var(--color-card-hover-border);
}

.ticket-card.featured {
  background: var(--color-featured-bg);
  border-color: var(--color-featured-border);
  box-shadow: 0 14px 28px rgb(237 152 35 / 18%);
}

.badge {
  position: absolute;
  top: -0.6rem;
  right: 1rem;
  background: var(--color-accent);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.56rem;
  border-radius: 999px;
}

h3 {
  font-family: var(--font-display);
  font-size: 2rem;
  line-height: 0.95;
  color: var(--color-ink);
}

.price {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  color: var(--color-ink);
}

.description {
  color: var(--color-ink-soft);
  font-size: 0.95rem;
}

ul {
  list-style: none;
  display: grid;
  gap: 0.5rem;
}

li {
  color: var(--color-list-text);
  font-size: 0.94rem;
}

li::before {
  content: '•';
  color: var(--color-accent);
  padding-right: 0.42rem;
}

footer {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

button {
  border-radius: 0.8rem;
  border: 1px solid transparent;
  padding: 0.58rem 0.8rem;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.favourite-btn {
  background: var(--color-fav-bg);
  border-color: var(--color-fav-border);
  color: var(--color-fav-text);
}

.favourite-btn:hover {
  background: var(--color-fav-hover-bg);
}

.cta-btn {
  background: var(--color-cta-bg);
  color: var(--color-cta-text);
}

.cta-btn:hover {
  background: var(--color-cta-hover-bg);
}

@keyframes card-enter {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
