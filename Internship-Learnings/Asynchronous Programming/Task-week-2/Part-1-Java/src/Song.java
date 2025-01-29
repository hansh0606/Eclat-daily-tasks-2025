public class Song {
    private String title;
    private String artist;
    private double duration;

    // Constructor to initialize the song
    public Song(String title, String artist, double duration) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
    }

    // Method to display song details
    public String toString() {
        return "Title: " + title + ", Artist: " + artist + ", Duration: " + duration + " mins";
    }

    public String getTitle() {
        return title;
    }

    // Getter method for duration
    public double getDuration() {
        return duration;
    }
}
