import ArtistSimplified from '../artist/artist-simplified';
import ExternalId from '../common/external-id';
import ExternalUrl from '../common/external-url';
import Image from '../common/image';
import Paging from '../paging/paging';
import TrackSimplified from '../track/track-simplified';

class Album {
    albumType: 'album' | 'single' | 'compilation';

    artists: ArtistSimplified[];

    availableMarkets: string[];

    copyrights: any[];

    externalIds: ExternalId;

    externalUrls: ExternalUrl;

    genres: string[];

    href: string;

    id: string;

    images: Image[];

    label: string;

    name: string;

    popularity: number;

    releaseDate: string;

    releaseDatePrecision: 'year' | 'month' | 'day';

    tracks: Paging<TrackSimplified>;

    type: 'album';

    uri: string;

    constructor(json: any) {
        if (json) {
            this.albumType = json.album_type;
            this.artists = json.artists.map(
                artistJson => new ArtistSimplified(artistJson)
            );
            this.availableMarkets = json.available_markets;
            this.copyrights = json.copyrights;
            this.externalIds = new ExternalId(json.external_ids);
            this.externalUrls = new ExternalUrl(json.external_urls);
            this.genres = json.genres;
            this.href = json.href;
            this.id = json.id;
            this.images = json.images.map(imageJson => new Image(imageJson));
            this.label = json.label;
            this.name = json.name;
            this.popularity = json.popularity;
            this.releaseDate = json.release_date;
            this.releaseDatePrecision = json.release_date_precision;
            this.tracks = new Paging(json.tracks);
            this.type = json.type;
            this.uri = json.uri;
        }
    }

    get stringArtists() {
        const artistNames = this.artists.map(artist => artist.name);
        return artistNames.join(', ');
    }

    get releaseYear() {
        return this.releaseDate.substring(0, 4);
    }

    get imageUrl() {
        return this.images[0].url;
    }
}

export default Album;
