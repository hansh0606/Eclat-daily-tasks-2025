import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Playlist playlist = new Playlist("My Playlist");

        while (true) {
            System.out.println("\nMenu:");
            System.out.println("1. Add a new song to the playlist");
            System.out.println("2. Remove a song from the playlist");
            System.out.println("3. Display all songs in the playlist");
            System.out.println("4. Search for a song by title");
            System.out.println("5. Display the total duration of the playlist");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine();  // Consume newline character

            switch (choice) {
                case 1:
                    System.out.print("Enter song title: ");
                    String title = scanner.nextLine();
                    System.out.print("Enter artist name: ");
                    String artist = scanner.nextLine();
                    System.out.print("Enter song duration (in minutes): ");
                    double duration = scanner.nextDouble();
                    scanner.nextLine();  // Consume newline character
                    Song song = new Song(title, artist, duration);
                    playlist.addSong(song);
                    System.out.println("Song added to the playlist.");
                    break;

                case 2:
                    System.out.print("Enter song title to remove: ");
                    String songToRemove = scanner.nextLine();
                    playlist.removeSong(songToRemove);
                    System.out.println("Song removed from the playlist.");
                    break;

                case 3:
                    System.out.println("Songs in the playlist:");
                    playlist.displaySongs();
                    break;

                case 4:
                    System.out.print("Enter song title to search: ");
                    String searchTitle = scanner.nextLine();
                    playlist.searchSong(searchTitle);
                    break;

                case 5:
                    System.out.println("Total duration of the playlist: " + playlist.calculateTotalDuration() + " mins");
                    break;

                case 6:
                    System.out.println("Exiting the application...");
                    scanner.close();
                    System.exit(0);
                    break;

                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}
