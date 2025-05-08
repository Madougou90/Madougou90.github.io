// calendar.js
document.addEventListener('DOMContentLoaded', function() {
  // Optionnel : Suivi des événements Calendly
  if(window.Calendly) {
      Calendly.initBadgeWidget({
          url: 'https://calendly.com/jureoconseil',
          text: 'Prendre RDV',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: false,
          lang: 'fr'
      });
      
      // Détection quand un RDV est pris
      Calendly('onEventScheduled', function(e) {
          console.log('RDV pris :', e.data.event);
          alert('Merci ! Votre rendez-vous a été confirmé.');
      });
  }
});