import BaseRepository from './BaseRepository'

export default class NameAndDescriptionRepository extends BaseRepository {
  static contentType = 'nameAndDescription' // Use your actual content type ID
  defaultOrder = 'fields.title' // Optional: order by name
}
