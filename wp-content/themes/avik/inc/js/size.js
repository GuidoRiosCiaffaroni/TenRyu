jQuery( document ).ready( function($) {

	$( '.avik-linked' ).on( 'click', function() {
		
		var $this = $( this );
		
		$this.parent().parent( '.size-wrap' ).prevAll().slice(0,4).find( 'input' ).removeClass( 'linked' ).attr( 'data-element', '' );
	
		$this.parent( '.link-size' ).removeClass( 'unlinked' );

	} );
	
	$( '.avik-unlinked' ).on( 'click', function() {

		var $this 		= $( this ),
			$element 	= $this.data( 'element' );
		
		$this.parent().parent( '.size-wrap' ).prevAll().slice(0,4).find( 'input' ).addClass( 'linked' ).attr( 'data-element', $element );
		
		$this.parent( '.link-size' ).addClass( 'unlinked' );

	} );
	
	$( '.size-wrap' ).on( 'input', '.linked', function() {

		var $data 	= $( this ).attr( 'data-element' ),
			$val 	= $( this ).val();

		$( '.linked[ data-element="' + $data + '" ]' ).each( function( key, value ) {
			$( this ).val( $val ).change();
		} );

	} );

	$( '.customize-control .responsive-change button' ).on( 'click', function( event ) {

		var $this 		= $( this ),
			$devices 	= $( '.responsive-change' ),
			$device 	= $( event.currentTarget ).data( 'device' ),
			$control 	= $( '.customize-control.has-change' ),
			$body 		= $( '.wp-full-overlay' ),
			$footer_devices = $( '.wp-full-overlay-footer .devices' );

		$devices.find( 'button' ).removeClass( 'active' );
		$devices.find( 'button.preview-' + $device ).addClass( 'active' );

		$control.find( '.control-wrap' ).removeClass( 'active' );
		$control.find( '.control-wrap.' + $device ).addClass( 'active' );
		$control.removeClass( 'control-device-desktop control-device-tablet control-device-mobile' ).addClass( 'control-device-' + $device );

		$body.removeClass( 'preview-desktop preview-tablet preview-mobile' ).addClass( 'preview-' + $device );

		$footer_devices.find( 'button' ).removeClass( 'active' ).attr( 'aria-pressed', false );
		$footer_devices.find( 'button.preview-' + $device ).addClass( 'active' ).attr( 'aria-pressed', true );

		if ( $this.hasClass( 'preview-desktop' ) ) {
			$control.toggleClass( 'responsive-change-open' );
		}

	} );

	$( '.wp-full-overlay-footer .devices button' ).on( 'click', function( event ) {

		var $this 		= $( this ),
			$devices 	= $( '.customize-control.has-change .responsive-change' ),
			$device 	= $( event.currentTarget ).data( 'device' ),
			$control 	= $( '.customize-control.has-change' );

		$devices.find( 'button' ).removeClass( 'active' );
		$devices.find( 'button.preview-' + $device ).addClass( 'active' );

		$control.find( '.control-wrap' ).removeClass( 'active' );
		$control.find( '.control-wrap.' + $device ).addClass( 'active' );
		$control.removeClass( 'control-device-desktop control-device-tablet control-device-mobile' ).addClass( 'control-device-' + $device );

		if ( ! $this.hasClass( 'preview-desktop' ) ) {
			$control.addClass( 'responsive-change-open' );
		} else {
			$control.removeClass( 'responsive-change-open' );
		}

	} );

} );