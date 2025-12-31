/**
 * Utility function to track button clicks and send data to the metadata API
 * @param buttonId - Unique identifier for the button
 */
export async function trackButtonClick(buttonId: string): Promise<void> {
  try {
    const payload = {
      client_id: '457c9f07-81e4-4d32-9893-f9cc83f1e1bc',
      button_id: buttonId,
      count: 1,
    };

    // Send API request - fire and forget, don't block UI
    fetch('https://collection.apinext.in/forms/metadata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).catch((error) => {
      // Silently fail - don't interrupt user experience
      console.error('Button tracking error:', error);
    });
  } catch (error) {
    // Silently fail - don't interrupt user experience
    console.error('Button tracking error:', error);
  }
}

