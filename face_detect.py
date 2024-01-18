import cv2
import webbrowser
from cvzone.FaceDetectionModule import FaceDetector

# Function to launch the website
def launch_website():
    url = "abc.html"  # Replace with the URL of your local website
    webbrowser.open(url, new=2)  # Open the URL in a new browser window or tab

def main():
    # Set up webcam
    cap = cv2.VideoCapture(0)
    detector = FaceDetector()

    while True:
        success, img = cap.read()
        img, bboxs = detector.findFaces(img)

        if bboxs:
            # Launch the website if a face is detected
            launch_website()
            break

        cv2.imshow("Face Detection", img)
        if cv2.waitKey(1) & 0xFF == 27:  # Press 'Esc' to exit the loop
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
