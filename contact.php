<?

include 'header.html';

?>

<section id="home" class="sliderwrapper clearfix" style="background-image: url(assets/images/home-bg.jpg);">

	<div class="home-overlay"></div>

	<div class="container">
		<div class="row text-center">
			<div class="col-md-8 col-md-offset-2">
				<div class="block" >
					<h1 class="home-title wow fadeInDown">Contact Us</h1>

					<div class="wow fadeInDown" data-wow-delay="0.3s">
						<a data-scroll class="btn btn-action" href="#contact"
						   role="button"><img src="assets/images/down.png" height="40px" width="40px">
						</a>
					</div>

				</div>
			</div>
			<!-- .row close -->
		</div>
	</div>

</section><!-- end Home -->

<section id="contact">
	<div class="container">
		<div class="row">
			<div class="col-sm-12 text-center">
			</div>
			<div class="col-sm-4" data-sr="enter left, hustle 80px">
				<div class="address">
					<p class="address-title title"><i class="fa fa-map-marker"></i> Address</p>

					<p class="address-content">103 Ward Hall, Cornell University<br>Ithaca, NY 14853
				</div>
				<div class="address">
					<p class="address-title title"><i class="fa fa-map-marker"></i> Shipping Address</p>

					<p class="address-content">Cornell Recycle Center, 251 Solidage Rd.<br>Ithaca, NY 14850<br>Attn: George Wood</p>
				</div>
				<div class="address">
					<p class="address-title title"><i class="fa fa-envelope-o"></i> E-mail</p>

					<p class="address-content">ecaft@cornell.edu</p>
				</div>
			</div>
			<div class="col-sm-8" data-sr="enter right, hustle 80px">
				<form class="st-form">
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group ">
								<input type="text" class="form-control" placeholder="YOUR NAME" id="yourname">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group ">
								<input type="text" class="form-control" placeholder="YOUR E-MAIL" id="youremail">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="form-group ">
								<input type="text" class="form-control" placeholder="YOUR SUBJECT" id="subject">
							</div>
						</div>
					</div>

					<div class="form-group ">
						<textarea class="form-control" rows="4" placeholder="WRITE YOUR MESSAGE" id="body"></textarea>
					</div>
					<button type="submit" class="btn btn-send" onclick="sendEmail()">Email Us</button>
					<script type="text/javascript">
						function sendEmail() {
							var subject = document.getElementById('subject').value;
							var body = document.getElementById('body').value;
							window.open('mailto:aoecornell@gmail.com?subject='+subject+'&body='+body);
						}
					</script>
				</form>
			</div>
		</div>
	</div>
</section>

<?

include 'footer.html';

?>
