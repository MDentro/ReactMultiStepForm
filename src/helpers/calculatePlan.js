import prices from './prices'

export default function calculatePlan(plan, period) {
  return Number(prices[plan][period])
}
