# Sample Add two numbers together
# Sample Call to function. 



        .data
msg1:  	.asciiz " \n" 

        	.text
        	.globl main
# ***********************************************************************
# So I want to save $s0-$s7  and 
# Floating Point registers $f20 - $f31 just to be save. Overkill...yes  
# but hey...that's my middle name.  Actually my middle name is Alan.  
# So how much space? 
# 8 words for the $s0-$s7 registers
# 12 words for the $f20-$f21 
# One word for $ra 
#    21 words or at least 84 bytes. 
# We pass the floating point argument in $f12 and return it in $f0. 
# ************************************************************************

main:
		addi	$sp,$sp,-96            # Set Stack Pointer
		sw	$s0,4($sp)
		sw	$s1,8($sp)
		sw	$s2,12($sp)
		sw	$s3,16($sp)
		sw	$s4,20($sp)
		sw	$s5,24($sp)
		sw	$s6,28($sp)
		sw	$s7,32($sp)
		s.s	$f20,36($sp)
		s.s	$f21,40($sp)
		s.s	$f22,44($sp)
		s.s	$f23,48($sp)
		s.s	$f24,52($sp)
		s.s	$f25,56($sp)
		s.s	$f26,60($sp)
		s.s	$f27,64($sp)
		s.s	$f28,68($sp)
		s.s	$f29,72($sp)
		s.s	$f30,76($sp)
		s.s	$f31,80($sp)
		sw	$ra,84($sp)
		li.s	$f12,25.0		# Move the floating point
						# number to the parameter
		jal	SQRT			# Call the Submroutine
		lw	$s0,4($sp)
		lw	$s1,8($sp)
		lw	$s2,12($sp)
		lw	$s3,16($sp)
		lw	$s4,20($sp)
		lw	$s5,24($sp)
		lw	$s6,28($sp)
		lw	$s7,32($sp)
		l.s	$f20,36($sp)
		l.s	$f21,40($sp)
		l.s	$f22,44($sp)
		l.s	$f23,48($sp)
		l.s	$f24,52($sp)
		l.s	$f25,56($sp)
		l.s	$f26,60($sp)
		l.s	$f27,64($sp)
		l.s	$f28,68($sp)
		l.s	$f29,72($sp)
		l.s	$f30,76($sp)
		l.s	$f31,80($sp)
		lw	$ra,84($sp)
		mov.s	$f12,$f0		# The results are sent back 
		li	$v0,2			# thru $f0 and print it out. 
		syscall
		jr	$ra	

		
SQRT:
		mov.s	$f1,$f12		# $f1 is UpperBound
		mov.s	$f5,$f1			# Make $f5 the Number 
		li.s	$f2,0.0			# $f2 is temp
		li.s	$f3,0.0			# $f3 is LowerBound
		li	$t2,50			# $t2 is Count
		li.s	$f4,2.0			# $f4 will hold the number 2.0

loop:		beq	$t2,$zero,done		# When Count is 0 your are done. 
 		add.s	$f2,$f1,$f3		# temp=UpperBound+LowerBound
		div.s	$f2,$f2,$f4		# temp=temp/2.0 
		mul.s	$f6,$f2,$f2		# get temp*temp
		c.eq.s	$f6,$f5			# is temp*temp=num
		bc1t	done			# If equal we are done
		c.lt.s	$f6,$f5
		bc1f	uegt			#
		mov.s	$f3,$f2
		b	coutm
uegt:		mov.s	$f1,$f2
coutm:		addi	$t2,$t2,-1
		b	loop 
done: 	
		mov.s	$f0,$f2
		jr	$ra			# Go back from whence we came. 
