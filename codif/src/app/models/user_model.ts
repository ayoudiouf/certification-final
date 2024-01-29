export class UserModel {
  _id!: number;
  prenom?: string;
  nom? : string;
  email?: string;
  password?: string;
  telephone?: string;
  statut?: boolean;
  photo_profile?: string;
  remember_token?: string;
  created_at?: string;
  update_at?: string;
}
