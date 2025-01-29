import java.util.ArrayList;

public class Playlist {
    @SuppressWarnings("unused")
    private String name;
    private ArrayList<Song> songs;

    // Constructor to initialize the playlist
    public Playlist(String name) {
        this.name = name;
        this.songs = new ArrayList<>();
    }

    // Add a song to the playlist
    public void addSong(Song song) {
        songs.add(song);
    }

    // Remove a song by title
    public void removeSong(String title) {
        songs.removeIf(song -> song.getTitle().equalsIgnoreCase(title));
    }

    // Display all songs in the playlist
    public void displaySongs() {
        if (songs.isEmpty()) {
            System.out.println("No songs in the playlist.");
        } else {
            for (Song song : songs) {
                System.out.println(song);
            }
        }
    }

    // Search for a song by title
    public void searchSong(String title) {
        for (Song song : songs) {
            if (song.getTitle().equalsIgnoreCase(title)) {
                System.out.println(song);
                return;
            }
        }
        System.out.println("Song not found.");
    }

    // Calculate total duration of all songs in the playlist
    public double calculateTotalDuration() {
        double totalDuration = 0;
        for (Song song : songs) {
            totalDuration += song.getDuration();  // Use the getter method
        }
        return totalDuration;
    }
}
