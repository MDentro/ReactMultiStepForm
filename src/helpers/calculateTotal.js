import calculateAddOn from './calculateAddOn'
import calculatePlan from './calculatePlan'

export default function calculateTotal(
  yearlyBilling,
  plan,
  isOnlineService,
  isLargerStorage,
  isCustomizableProfile
) {
  let sum = 0

  if (yearlyBilling) {
    sum = sum + calculatePlan(plan, 'yearly')
    if (isOnlineService) {
      sum = sum + calculateAddOn('onlineService', 'yearly')
    }
    if (isLargerStorage) {
      sum = sum + calculateAddOn('largerStorage', 'yearly')
    }
    if (isCustomizableProfile) {
      sum = sum + calculateAddOn('customizableProfile', 'yearly')
    }
  } else {
    sum = sum + calculatePlan(plan, 'monthly')
    if (isOnlineService) {
      sum = sum + calculateAddOn('onlineService', 'monthly')
    }
    if (isLargerStorage) {
      sum = sum + calculateAddOn('largerStorage', 'monthly')
    }
    if (isCustomizableProfile) {
      sum = sum + calculateAddOn('customizableProfile', 'monthly')
    }
  }

  if (yearlyBilling) {
    return `$${sum}/yr`
  } else {
    return `$${sum}/mo`
  }
}
