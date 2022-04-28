export class IAnimal {
  id: string;
  name?: string;
  gender?: string;
  birthDate?: string;
  imageUrl?: string;
  action?: (() => void) | null;
}
