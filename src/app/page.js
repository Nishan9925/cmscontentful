import NameAndDescriptionRepository from './repositories/NameAndDescriptionRepository'

export default async function HomePage() {
  const repo = new NameAndDescriptionRepository()
  const items = await repo.getModels()

  return (
    <div>
      <h1>Contentful Entries</h1>
      {items.map(item => (
        <div key={item.sys.id}>
          <h1>{item.fields.title}</h1>
        </div>
      ))}
    </div>
  )
}
