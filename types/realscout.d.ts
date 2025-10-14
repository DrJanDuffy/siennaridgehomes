// types/realscout.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'realscout-simple-search': {
      'agent-encoded-id': string
      style?: React.CSSProperties
      className?: string
    }
    'realscout-advanced-search': {
      'agent-encoded-id': string
      style?: React.CSSProperties
      className?: string
    }
    'realscout-office-listings': {
      'agent-encoded-id': string
      'sort-order'?: string
      'listing-status'?: string
      'property-types'?: string
      'price-min'?: string
      'price-max'?: string
      style?: React.CSSProperties
      className?: string
    }
    'realscout-home-value': {
      'agent-encoded-id': string
      style?: React.CSSProperties
      className?: string
    }
  }
}

// Global declarations for RealScout web components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-simple-search': {
        'agent-encoded-id': string
        style?: React.CSSProperties
        className?: string
      }
      'realscout-advanced-search': {
        'agent-encoded-id': string
        style?: React.CSSProperties
        className?: string
      }
      'realscout-office-listings': {
        'agent-encoded-id': string
        'sort-order'?: string
        'listing-status'?: string
        'property-types'?: string
        'price-min'?: string
        'price-max'?: string
        style?: React.CSSProperties
        className?: string
      }
      'realscout-home-value': {
        'agent-encoded-id': string
        style?: React.CSSProperties
        className?: string
      }
    }
  }
}

export {}
