export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Receives a string and normalizes it to a slug.
   *
   * Example: "An example text" -> "an-example-text"
   *
   * @param text {string}
   */
  static createFromString(text: string): Slug {
    const slug = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/^-/, '')
      .replace(/-$/, '')

    return new Slug(slug)
  }
}
