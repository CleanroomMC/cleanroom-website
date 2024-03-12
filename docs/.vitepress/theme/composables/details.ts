const EXPAND_DETAILS_ANIMATION_DURATION = 250

export function handleDetails(details: HTMLDetailsElement) {
  let animation: Animation | undefined
  const summary = details.querySelector('summary')
  const otherElements = Array.from(details.children).filter(item => item.tagName !== 'summary') as HTMLElement[]
  if (!summary) return

  summary.addEventListener('click', (event) => {
    event.preventDefault()
    details.style.overflow = 'hidden'
    details.style.height = `${details.offsetHeight}px`;

    if (details.open) {
      window.requestAnimationFrame(() => handleDetailsOpen(summary))
    } else {
      window.requestAnimationFrame(() => handleDetailsClose(summary))
    }
  })

  function handleDetailsOpen(summary: HTMLElement) {
    const startHeight = details.offsetHeight
    const endHeight = summary.offsetHeight + getElementButtomHeiht(summary)
    handleStartAnimation(startHeight, startHeight - endHeight, false)
  }

  function handleDetailsClose(summary: HTMLElement) {
    const startHeight = details.offsetHeight;
    const endHeight = summary.offsetHeight + getElementButtomHeiht(details) + otherElements.reduce((a, b) => a + b.offsetHeight, 0);
    handleStartAnimation(startHeight, endHeight, true)
  }

  function handleStartAnimation(startHeight: number, endHeight: number, open: boolean) {
    if (animation) {
      animation.cancel()
    }

    animation = details.animate({
      height: [`${startHeight}px`, `${endHeight}px`]
    }, {
      easing: 'ease-out',
      duration: EXPAND_DETAILS_ANIMATION_DURATION
    })

    animation.addEventListener('finish', () => handleFinishAnimation(open))
  }

  function handleFinishAnimation(open: boolean) {
    details.open = open
    animation = undefined
    details.style.height = details.style.overflow = ''
  }

  function getElementButtomHeiht(el: HTMLElement) {
    return parseFloat(getComputedStyle(el).marginBottom) + parseFloat(getComputedStyle(details).borderBottomWidth)
  }
}
