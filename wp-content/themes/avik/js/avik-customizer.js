/**
 * avik-customizer.js
 *
 * author    Denis Franchi
 * package   Avik
 */

/* TABLE OF CONTENT

  1 - Site identity
  2 - Who we are
  3 - Services
  4 - Portfolio
  5 - Blog
  6 - Footer
  7 - Color Filter Header Home
  8 - Padding Text Cursot Automatic
*/

( function( $ ) {

/* ------------------------------------------------------------------------- *
## 1 Site identity */
/* ------------------------------------------------------------------------- */

// Site title and description.
wp.customize( 'blogname', function( value ) {
	value.bind( function( to ) {
	$( '.site-title a' ).text( to );
	} );
} );
wp.customize( 'blogdescription', function( value ) {
	value.bind( function( to ) {
	$( '.site-description' ).text( to );
	} );
} );

// Header text color.
wp.customize( 'header_textcolor', function( value ) {
	value.bind( function( to ) {
	if ( 'blank' === to ) {
	$( '.site-title, .site-description' ).css( {
			'clip': 'rect(1px, 1px, 1px, 1px)',
			'position': 'absolute'
	} );
	} else {
	$( '.site-title, .site-description' ).css( {
			'clip': 'auto',
			'position': 'relative'
	} );
	$( '.site-title a, .site-description' ).css( {
			'color': to
	} );
	}
	} );
} );

	// Font Size Logo
	wp.customize("avik_font_size_logo", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_font_size_logo");
			if (to) {
				
				var img = '<style class="customizer-avik_font_size_logo">.avik-custom-logo-body { width: ' + to + "px; }</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})

	// Font Size Logo Table
	wp.customize("avik_font_size_logo_table", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_font_size_logo_table");
			if (to) {
				/** @type {string} */
				var img = '<style class="customizer-avik_font_size_logo_table">@media (max-width: 768px){.avik-custom-logo-body { width: ' + to + "px; }}</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})

	// Font Size Logo Mobile
	wp.customize("avik_font_size_logo_mobile", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_font_size_logo_mobile");
			if (to) {
				/** @type {string} */
				var img = '<style class="customizer-avik_font_size_logo_mobile">@media (max-width: 480px){.avik-custom-logo-body { width: ' + to + "px; }}</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})


/* ------------------------------------------------------------------------- *
## 2 Who we are */
/* ------------------------------------------------------------------------- */

	// Height Image
	wp.customize("avik_height_col_who_section", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_height_col_who_section");
			if (to) {
				
				var img = '<style class="customizer-avik_height_col_who_section">.who-we-are-image-frame{ height: ' + to + "px; }</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})

	// Height Image Table
	wp.customize("avik_height_col_who_section_table", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_height_col_who_section_table");
			if (to) {
				/** @type {string} */
				var img = '<style class="customizer-avik_height_col_who_section_table">@media (max-width: 768px){.who-we-are-image-frame { height: ' + to + "px; }}</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})

	// Height Image  Mobile
	wp.customize("avik_height_col_who_section_mobile", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_height_col_who_section_mobile");
			if (to) {
				/** @type {string} */
				var img = '<style class="customizer-avik_height_col_who_section_mobile">@media (max-width: 480px){.who-we-are-image-frame { height: ' + to + "px; }}</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})

		// Height Image Primary 
		wp.customize("avik_with_image_p_who_we", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-avik_with_image_p_who_we");
				if (to) {
					
					var img = '<style class="customizer-avik_with_image_p_who_we">img.img-who-we-are {  max-width: ' + to + "px; }</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		})
	
		// Height Image Primary Table
		wp.customize("avik_with_image_p_who_we_table", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-avik_with_image_p_who_we_table");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-avik_with_image_p_who_we_table">@media (max-width: 768px){img.img-who-we-are {  max-width: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		})
	
		// Height Image  Primary Mobile
		wp.customize("avik_with_image_p_who_we_mobile", function($swipe) {
			$swipe.bind(function(to) {
				var $child = $(".customizer-avik_with_image_p_who_we_mobile");
				if (to) {
					/** @type {string} */
					var img = '<style class="customizer-avik_with_image_p_who_we_mobile">@media (max-width: 480px){img.img-who-we-are  {  max-width: ' + to + "px; }}</style>";
					if ($child.length) {
						$child.replaceWith(img);
					} else {
						$("head").append(img);
					}
				} else {
					$child.remove();
				}
			});
		})

			// Height Image Secondary 
			wp.customize("avik_with_image_s_who_we", function($swipe) {
				$swipe.bind(function(to) {
					var $child = $(".customizer-avik_with_image_s_who_we");
					if (to) {
						
						var img = '<style class="customizer-avik_with_image_s_who_we">.first-image-who-we-are img {  max-width: ' + to + "px; }</style>";
						if ($child.length) {
							$child.replaceWith(img);
						} else {
							$("head").append(img);
						}
					} else {
						$child.remove();
					}
				});
			})
		
			// Height Image Secondary Table
			wp.customize("avik_with_image_s_who_we_table", function($swipe) {
				$swipe.bind(function(to) {
					var $child = $(".customizer-avik_with_image_s_who_we_table");
					if (to) {
						/** @type {string} */
						var img = '<style class="customizer-avik_with_image_s_who_we_table">@media (max-width: 768px){.first-image-who-we-are img {  max-width: ' + to + "px; }}</style>";
						if ($child.length) {
							$child.replaceWith(img);
						} else {
							$("head").append(img);
						}
					} else {
						$child.remove();
					}
				});
			})
		
			// Height Image  Secondary Mobile
			wp.customize("avik_with_image_s_who_we_mobile", function($swipe) {
				$swipe.bind(function(to) {
					var $child = $(".customizer-avik_with_image_s_who_we_mobile");
					if (to) {
						/** @type {string} */
						var img = '<style class="customizer-avik_with_image_s_who_we_mobile">@media (max-width: 480px){.first-image-who-we-are img  {  max-width: ' + to + "px; }}</style>";
						if ($child.length) {
							$child.replaceWith(img);
						} else {
							$("head").append(img);
						}
					} else {
						$child.remove();
					}
				});
			})

// Color title banner image
wp.customize( 'avik_color_title_image_banner_whoweare', function( value ) {
    value.bind( function( newval ) {
    $( '#typed' ).css( 'color', newval );
    } );
} );

// Color cursor banner image
wp.customize( 'avik_color_cursor_image_banner_whoweare', function( value ) {
    value.bind( function( newval ) {
    $( '.typed-cursor' ).css( 'color', newval );
    } );
} );

// Title Statistics 1
wp.customize( 'avik_title_1_statistics_whoweare', function( value ) {
	value.bind( function( newval ) {
		$( '.statistics-text.one h4' ).html( newval );

	} );
} );

// Title Statistics 2
wp.customize( 'avik_title_2_statistics_whoweare', function( value ) {
	value.bind( function( newval ) {
		$( '.statistics-text.two h4' ).html( newval );

	} );
} );

// Title Statistics 3
wp.customize( 'avik_title_3_statistics_whoweare', function( value ) {
	value.bind( function( newval ) {
		$( '.statistics-text.three h4' ).html( newval );

	} );
} );

// Title Statistics 4
wp.customize( 'avik_title_4_statistics_whoweare', function( value ) {
	value.bind( function( newval ) {
		$( '.statistics-text.four h4' ).html( newval );

	} );
} );

// Title general Team
wp.customize( 'avik_title_general_team_whoweare', function( value ) {
	value.bind( function( newval ) {
		$( '.title-team h3' ).html( newval );

	} );
} );

// Title Partner
wp.customize( 'avik_title_partner_whoweare', function( value ) {
	value.bind( function( newval ) {
		$( '.title-brands h3' ).html( newval );

	} );
} );

// Subtitle Partner
wp.customize( 'avik_subtitle_partner_whoweare', function( value ) {
	value.bind( function( newval ) {
		$( '.title-brands h4' ).html( newval );

	} );
} );

/* ------------------------------------------------------------------------- *
## 3 Services */
/* ------------------------------------------------------------------------- */

// Title  Services
wp.customize( 'avik_title_services', function( value ) {
	value.bind( function( newval ) {
		$( 'h1.tab__title ' ).html( newval );

	} );
} );

// Subtitle Services
wp.customize( 'avik_subtitle_services', function( value ) {
	value.bind( function( newval ) {
		$( '.tab__subheading h2' ).html( newval );

	} );
} );

// Title Partners
wp.customize( 'avik_title_partners_services', function( value ) {
	value.bind( function( newval ) {
		$( '.title-partenrs h2' ).html( newval );

	} );
} );

// Subtitle Partners
wp.customize( 'avik_subtitle_partners_services', function( value ) {
	value.bind( function( newval ) {
		$( '.title-partenrs h3' ).html( newval );

	} );
} );

// Title 1 Price quotation
wp.customize( 'avik_title_1_quotation_services', function( value ) {
	value.bind( function( newval ) {
		$( '.separator-price h2' ).html( newval );

	} );
} );

// Subitle 1 Price quotation
wp.customize( 'avik_subtitle_1_quotation_services', function( value ) {
	value.bind( function( newval ) {
		$( '.separator-price h3' ).html( newval );

	} );
} );

// Title 2 Price quotation
wp.customize( 'avik_title_2_quotation_services', function( value ) {
	value.bind( function( newval ) {
		$( '.subtitle-price h3' ).html( newval );

	} );
} );

// Subtitle 2 Price quotation
wp.customize( 'avik_subtitle_2_quotation_services', function( value ) {
	value.bind( function( newval ) {
		$( '.subtitle-price h4' ).html( newval );

	} );
} );

/* ------------------------------------------------------------------------- *
## 4 Portfolio */
/* ------------------------------------------------------------------------- */

// Title Portfolio
wp.customize( 'avik_title_portfolio', function( value ) {
	value.bind( function( newval ) {
		$( '#control-portfolio h3' ).html( newval );

	} );
} );

// Title Nav All
wp.customize( 'avik_title_nav_all_portfolio', function( value ) {
	value.bind( function( newval ) {
		$( 'li.all' ).html( newval );

	} );
} );

// Title Nav 1
wp.customize( 'avik_title_nav_1_portfolio', function( value ) {
	value.bind( function( newval ) {
		$( 'li.one' ).html( newval );

	} );
} );

// Title Nav 2
wp.customize( 'avik_title_nav_2_portfolio', function( value ) {
	value.bind( function( newval ) {
		$( 'li.two' ).html( newval );

	} );
} );

// Title Nav 3
wp.customize( 'avik_title_nav_3_portfolio', function( value ) {
	value.bind( function( newval ) {
		$( 'li.three' ).html( newval );

	} );
} );

/* ------------------------------------------------------------------------- *
## 5 Blog */
/* ------------------------------------------------------------------------- */

// Title Blog
wp.customize( 'avik_title_blog', function( value ) {
	value.bind( function( newval ) {
		$( 'h2.blog' ).html( newval );

	} );
} );

/* ------------------------------------------------------------------------- *
## 6 Contact */
/* ------------------------------------------------------------------------- */

// Title  Contact
wp.customize( 'avik_title_contact', function( value ) {
	value.bind( function( newval ) {
		$( '.address h3 ' ).html( newval );

	} );
} );

// Subtitle  Contact
wp.customize( 'avik_subtitle_contact', function( value ) {
	value.bind( function( newval ) {
		$( '.address p ' ).html( newval );

	} );
} );

/* ------------------------------------------------------------------------- *
## 7 Color Filter Header Home */
/* ------------------------------------------------------------------------- */

// Color Filter
wp.customize( 'avik_color_filter_header', function( value ) {
	value.bind( function( newval ) {
		$( '.filter-header' ).css('background-color', newval );

	} );
} );

/* ------------------------------------------------------------------------- *
## 8 Padding Text Cursot Automatic */
/* ------------------------------------------------------------------------- */

// Padding Top
wp.customize("avik_padding_top_text_static", function($swipe) {
	$swipe.bind(function(to) {
		var $child = $(".customizer-avik_padding_top_text_static");
		if (to) {
			
			var img = '<style class="customizer-avik_padding_top_text_static">.text-image-static { padding-top: ' + to + "em; }</style>";
			if ($child.length) {
				$child.replaceWith(img);
			} else {
				$("head").append(img);
			}
		} else {
			$child.remove();
		}
	});
})

// Padding Top Table
wp.customize("avik_padding_top_text_static_table", function($swipe) {
	$swipe.bind(function(to) {
		var $child = $(".customizer-avik_padding_top_text_static_table");
		if (to) {
			/** @type {string} */
			var img = '<style class="customizer-avik_padding_top_text_static_table">@media (max-width: 768px){.text-image-static { padding-top: ' + to + "em; }}</style>";
			if ($child.length) {
				$child.replaceWith(img);
			} else {
				$("head").append(img);
			}
		} else {
			$child.remove();
		}
	});
})

// Padding Top Mobile
wp.customize("avik_padding_top_text_static_mobile", function($swipe) {
	$swipe.bind(function(to) {
		var $child = $(".customizer-avik_padding_top_text_static_mobile");
		if (to) {
			/** @type {string} */
			var img = '<style class="customizer-avik_padding_top_text_static_mobile">@media (max-width: 480px){.text-image-static { padding-top: ' + to + "em; }}</style>";
			if ($child.length) {
				$child.replaceWith(img);
			} else {
				$("head").append(img);
			}
		} else {
			$child.remove();
		}
	});
})

// Padding Left
wp.customize("avik_padding_left_text_static", function($swipe) {
	$swipe.bind(function(to) {
		var $child = $(".customizer-avik_padding_left_text_static");
		if (to) {
			
			var img = '<style class="customizer-avik_padding_left_text_static">.text-image-static { padding-left: ' + to + "em; }</style>";
			if ($child.length) {
				$child.replaceWith(img);
			} else {
				$("head").append(img);
			}
		} else {
			$child.remove();
		}
	});
})

// Padding Left Table
wp.customize("avik_padding_left_text_static_table", function($swipe) {
	$swipe.bind(function(to) {
		var $child = $(".customizer-avik_padding_left_text_static_table");
		if (to) {
			/** @type {string} */
			var img = '<style class="customizer-avik_padding_left_text_static_table">@media (max-width: 768px){.text-image-static { padding-left: ' + to + "em; }}</style>";
			if ($child.length) {
				$child.replaceWith(img);
			} else {
				$("head").append(img);
			}
		} else {
			$child.remove();
		}
	});
})

// Padding Left Mobile
wp.customize("avik_padding_left_text_static_mobile", function($swipe) {
	$swipe.bind(function(to) {
		var $child = $(".customizer-avik_padding_left_text_static_mobile");
		if (to) {
			/** @type {string} */
			var img = '<style class="customizer-avik_padding_left_text_static_mobile">@media (max-width: 480px){.text-image-static { padding-left: ' + to + "em; }}</style>";
			if ($child.length) {
				$child.replaceWith(img);
			} else {
				$("head").append(img);
			}
		} else {
			$child.remove();
		}
	});
})


// Padding Top scroll
wp.customize("avik_padding_top_scroll_static", function($swipe) {
	$swipe.bind(function(to) {
		var $child = $(".customizer-avik_padding_top_scroll_static");
		if (to) {
			
			var img = '<style class="customizer-avik_padding_top_scroll_static">.down-video { padding-top: ' + to + "em; }</style>";
			if ($child.length) {
				$child.replaceWith(img);
			} else {
				$("head").append(img);
			}
		} else {
			$child.remove();
		}
	});
})

// Padding Top Scroll Table
wp.customize("avik_padding_top_scroll_static_table", function($swipe) {
	$swipe.bind(function(to) {
		var $child = $(".customizer-avik_padding_top_scroll_static_table");
		if (to) {
			/** @type {string} */
			var img = '<style class="customizer-avik_padding_top_scroll_static_table">@media (max-width: 768px){.down-video { padding-top: ' + to + "em; }}</style>";
			if ($child.length) {
				$child.replaceWith(img);
			} else {
				$("head").append(img);
			}
		} else {
			$child.remove();
		}
	});
})

// Padding Top Scroll Mobile
wp.customize("avik_padding_top_scroll_static_mobile", function($swipe) {
	$swipe.bind(function(to) {
		var $child = $(".customizer-avik_padding_top_scroll_static_mobile");
		if (to) {
			/** @type {string} */
			var img = '<style class="customizer-avik_padding_top_scroll_static_mobile">@media (max-width: 480px){.down-video { padding-top: ' + to + "em; }}</style>";
			if ($child.length) {
				$child.replaceWith(img);
			} else {
				$("head").append(img);
			}
		} else {
			$child.remove();
		}
	});
})

// Padding Left Scroll
wp.customize("avik_padding_left_scroll_static", function($swipe) {
	$swipe.bind(function(to) {
		var $child = $(".customizer-avik_padding_left_scroll_static");
		if (to) {
			
			var img = '<style class="customizer-avik_padding_left_scroll_static">.down-video { padding-left: ' + to + "em; }</style>";
			if ($child.length) {
				$child.replaceWith(img);
			} else {
				$("head").append(img);
			}
		} else {
			$child.remove();
		}
	});
})

// Padding Left Scroll Table
wp.customize("avik_padding_left_scroll_static_table", function($swipe) {
	$swipe.bind(function(to) {
		var $child = $(".customizer-avik_padding_left_scroll_static_table");
		if (to) {
			/** @type {string} */
			var img = '<style class="customizer-avik_padding_left_scroll_static_table">@media (max-width: 768px){.down-video { padding-left: ' + to + "em; }}</style>";
			if ($child.length) {
				$child.replaceWith(img);
			} else {
				$("head").append(img);
			}
		} else {
			$child.remove();
		}
	});
})

// Padding Left Scroll Mobile
wp.customize("avik_padding_left_scroll_static_mobile", function($swipe) {
	$swipe.bind(function(to) {
		var $child = $(".customizer-avik_padding_left_scroll_static_mobile");
		if (to) {
			/** @type {string} */
			var img = '<style class="customizer-avik_padding_left_scroll_static_mobile">@media (max-width: 480px){.down-video { padding-left: ' + to + "em; }}</style>";
			if ($child.length) {
				$child.replaceWith(img);
			} else {
				$("head").append(img);
			}
		} else {
			$child.remove();
		}
	});
})

	// Height Image
	wp.customize("avik_height_img_static", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_height_img_static");
			if (to) {
				
				var img = '<style class="customizer-avik_height_img_static">.wp-custom-header iframe,.wp-custom-header img,.wp-custom-header video,.wp-custom-header,.header-static,.filter-header.avik-static-filter { height: ' + to + "vh; }</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})

	// Height Image Table
	wp.customize("avik_height_img_static_table", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_height_img_static_table");
			if (to) {
				/** @type {string} */
				var img = '<style class="customizer-avik_height_img_static_table">@media (max-width: 768px){.wp-custom-header iframe,.wp-custom-header img,.wp-custom-header video,.wp-custom-header,.header-static,.filter-header.avik-static-filter { height: ' + to + "vh; }}</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})

	// Height Image  Mobile
	wp.customize("avik_height_img_static_mobile", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_height_img_static_mobile");
			if (to) {
				/** @type {string} */
				var img = '<style class="customizer-avik_height_img_static_mobile">@media (max-width: 480px){.wp-custom-header iframe,.wp-custom-header img,.wp-custom-header video,.wp-custom-header,.header-static,.filter-header.avik-static-filter { height: ' + to + "vh; }}</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})


	// Font Size text Cursor
	wp.customize("avik_font_size_text_static", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_font_size_text_static");
			if (to) {
				
				var img = '<style class="customizer-avik_font_size_text_static">span#avikservices { font-size: ' + to + "px; }</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})

	// Font Size tex Cursor  Table
	wp.customize("avik_font_size_text_static_table", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_font_size_text_static_table");
			if (to) {
				/** @type {string} */
				var img = '<style class="customizer-avik_font_size_text_static_table">@media (max-width: 768px){span#avikservices { font-size: ' + to + "px; }}</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})

	// Font Size text Cursor  Mobile
	wp.customize("avik_font_size_text_static_mobile", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_font_size_text_static_mobile");
			if (to) {
				/** @type {string} */
				var img = '<style class="customizer-avik_font_size_text_static_mobile">@media (max-width: 480px){span#avikservices { font-size: ' + to + "px; }}</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})



	// Font Size Cursor
	wp.customize("avik_font_size_cursor_static", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_font_size_cursor_static");
			if (to) {
				
				var img = '<style class="customizer-avik_font_size_cursor_static">.typed-cursor { font-size: ' + to + "px; }</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})

	// Font Size Cursor  Table
	wp.customize("avik_font_size_cursor_static_table", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_font_size_cursor_static_table");
			if (to) {
				/** @type {string} */
				var img = '<style class="customizer-avik_font_size_cursor_static_table">@media (max-width: 768px){.typed-cursor { font-size: ' + to + "px; }}</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})

	// Font Size  Cursor  Mobile
	wp.customize("avik_font_size_cursor_static_mobile", function($swipe) {
		$swipe.bind(function(to) {
			var $child = $(".customizer-avik_font_size_cursor_static_mobile");
			if (to) {
				/** @type {string} */
				var img = '<style class="customizer-avik_font_size_cursor_static_mobile">@media (max-width: 480px){.typed-cursor { font-size: ' + to + "px; }}</style>";
				if ($child.length) {
					$child.replaceWith(img);
				} else {
					$("head").append(img);
				}
			} else {
				$child.remove();
			}
		});
	})
// Border Radius Button
wp.customize('avik_title_button_services_bord_r', function(control) {
	control.bind(function( controlValue ) {
		$('.btn-avik').css('border-radius', controlValue + 'px');
	});
});

// Margin Top Image Primary Who we are
wp.customize('avik_margin_top_image_p_who_we', function(control) {
	control.bind(function( controlValue ) {
		$('.second-image-who-we-are').css('margin-top', controlValue + 'em');
	});
});

// Margin Left Image Primary Who we are
wp.customize('avik_margin_left_image_p_who_we', function(control) {
	control.bind(function( controlValue ) {
		$('img.img-who-we-are').css('margin-left', controlValue + 'em');
	});
});

// Margin Top Image Primary Who we are 2
wp.customize('avik_margin_top_image_s_who_we', function(control) {
	control.bind(function( controlValue ) {
		$('.first-image-who-we-are img').css('margin-top', controlValue + 'em');
	});
});

// Margin Left Image Primary Who we are 2
wp.customize('avik_margin_left_image_s_who_we', function(control) {
	control.bind(function( controlValue ) {
		$('.first-image-who-we-are img').css('margin-left', controlValue + 'em');
	});
});

// Height Image Contact
wp.customize('avik_height_img_contact', function(control) {
	control.bind(function( controlValue ) {
		$('.contact img').css('max-height', controlValue + 'px');
	});
});

// Height Image Who we are page header
wp.customize('avik_height_image_whowearepage', function(control) {
	control.bind(function( controlValue ) {
		$('.header-image-whoweare img').css('max-height', controlValue + 'px');
	});
});

// Padding Top Cursor who we are
wp.customize('avik_padding_cursor_image_whowearepage', function(control) {
	control.bind(function( controlValue ) {
		$('.text-image-whoweare').css('padding-top', controlValue + 'em');
	});
});

// Height Image Services page header
wp.customize('avik_height_image_services_page', function(control) {
	control.bind(function( controlValue ) {
		$('.header-image-services img').css('height', controlValue + 'px');
	});
});

// Padding Top Cursor Services
wp.customize('avik_padding_cursor_image_services_page', function(control) {
	control.bind(function( controlValue ) {
		$('.text-image-services').css('padding-top', controlValue + 'em');
	});
});

// Font Size Menu
wp.customize('avik_font_size_menu', function(control) {
	control.bind(function( controlValue ) {
		$('.navbar a').css('font-size', controlValue + 'px');
	});
});

// Padding Menu
wp.customize('avik_padding_menu', function(control) {
	control.bind(function( controlValue ) {
		$('.navbar-collapse li').css('padding', controlValue + 'px');
	});
});

// Title 404
wp.customize( 'avik_title_404', function( value ) {
	value.bind( function( newval ) {
		$( '.bold-number-404' ).html( newval );

	} );
} );

// Subtitle 404
wp.customize( 'avik_subtitle_404', function( value ) {
	value.bind( function( newval ) {
		$( '.bold-text-404' ).html( newval );

	} );
} );

// Height Image 404 
wp.customize('avik_height_image_404', function(control) {
	control.bind(function( controlValue ) {
		$('.four-page-section').css('height', controlValue + 'px');
	});
});

// Text Color  404 
wp.customize('avik_color_text_404', function(control) {
	control.bind(function( controlValue ) {
		$('.bold-number-404,.bold-text-404').css('color', controlValue );
	});
});

// Margin Top Section Who We Are
wp.customize('avik_margin_top_section_whoweare', function(control) {
	control.bind(function( controlValue ) {
		$('#who-we-are').css('margin-top', controlValue + 'em');
	});
});

// Margin Bottom Section Who We Are
wp.customize('avik_margin_bottom_section_whoweare', function(control) {
	control.bind(function( controlValue ) {
		$('#who-we-are').css('margin-bottom', controlValue + 'em');
	});
});

// Margin Top Section Services
wp.customize('avik_margin_top_section_services', function(control) {
	control.bind(function( controlValue ) {
		$('#services').css('margin-top', controlValue + 'em');
	});
});

// Margin Bottom Section Services
wp.customize('avik_margin_bottom_section_services', function(control) {
	control.bind(function( controlValue ) {
		$('#services').css('margin-bottom', controlValue + 'em');
	});
});

// Padding Bottom Section Services
wp.customize('avik_padding_bottom_section_services', function(control) {
	control.bind(function( controlValue ) {
		$('#services').css('padding-bottom', controlValue + 'em');
	});
});

// Margin Top Section Portfolio
wp.customize('avik_margin_top_section_portfolio', function(control) {
	control.bind(function( controlValue ) {
		$('#portfolio').css('margin-top', controlValue + 'em');
	});
});

// Margin Bottom Section Portfolio
wp.customize('avik_margin_bottom_section_portfolio', function(control) {
	control.bind(function( controlValue ) {
		$('#portfolio').css('margin-bottom', controlValue + 'em');
	});
});

// Margin Top Section Blog
wp.customize('avik_margin_top_section_avik-blog', function(control) {
	control.bind(function( controlValue ) {
		$('#avik-blog').css('margin-top', controlValue + 'em');
	});
});

// Margin Bottom Section Blog
wp.customize('avik_margin_bottom_section_avik-blog', function(control) {
	control.bind(function( controlValue ) {
		$('#avik-blog').css('margin-bottom', controlValue + 'em');
	});
});

// Padding Bottom Section Blog
wp.customize('avik_padding_bottom_section_avik-blog', function(control) {
	control.bind(function( controlValue ) {
		$('#avik-blog').css('padding-bottom', controlValue + 'em');
	});
});

// Margin Top Section Contact
wp.customize('avik_margin_top_section_contact', function(control) {
	control.bind(function( controlValue ) {
		$('#contact').css('margin-top', controlValue + 'em');
	});
});

// Margin Bottom Section Contact
wp.customize('avik_margin_bottom_section_contact', function(control) {
	control.bind(function( controlValue ) {
		$('#contact').css('margin-bottom', controlValue + 'em');
	});
});

// Margin Top Site Av
wp.customize('avik_margin_top_site-av', function(control) {
	control.bind(function( controlValue ) {
		$('.site-post-page').css('margin-top', controlValue + 'em');
	});
});

// Font Size Title General
wp.customize('avik_font_size_title_general', function(control) {
	control.bind(function( controlValue ) {
		$('h3.tit-who,.portfolio h3,h2.font-tit-blog,.address h3,.tabs h1.tab__title,.avik-who-we-are h3,.title-partenrs h2,.title-whoweare h3,.title-team h3,.brands h3,.avik-info-img-page-contact h1').css('font-size', controlValue + 'px');
	});
});



} )( jQuery );
