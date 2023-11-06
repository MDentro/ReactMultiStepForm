import prices from './prices'

export default function calculateAddOn(addOn, period) {
  return Number(prices[addOn][period])
}
